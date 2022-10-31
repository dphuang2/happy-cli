import {Command, Flags} from '@oclif/core'
import * as findWorkspaceRoot from 'find-yarn-workspace-root'
import * as fs from 'node:fs'
import * as tar from 'tar'
import ignore from 'ignore'
import {getArchivePath} from '../util/get-archive-path'
import path = require('node:path')
import {getApiOrigin} from '../util/get-api-origin'
import axios, {AxiosError} from 'axios'
import {getSessionToken} from '../util/get-session-token'
import {getUserId} from '../util/get-user-id'
export default class Deploy extends Command {
  static description = 'Deploy to dash.gethappy.dev'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    dev: Flags.boolean({char: 'd', hidden: true}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(Deploy)

    const sessionToken = getSessionToken()
    this.debug('sessionToken:', sessionToken)

    if (sessionToken === null) {
      console.error('Login with "happy login"')
      return
    }

    const root = findWorkspaceRoot() ?? '.'
    this.debug('root:', root)
    process.chdir(root)
    const f = fs.readFileSync(`${root}/.gitignore`, 'utf-8')
    const ig = ignore().add(f.split('\n'))

    const archivePath = getArchivePath()
    this.debug('archivePath:', archivePath)

    await tar.c({
      gzip: true, file: archivePath, filter(p) {
        const relativePath = path.relative(root, p)

        // Root dir, continue to recurse
        if (relativePath === '') return true

        if (relativePath.startsWith('.git')) return false

        return !ig.ignores(relativePath)
      },
    }, ['./'])

    const deployApiUrl = `${getApiOrigin(flags)}/deploy`
    this.debug('apiUrl:', deployApiUrl)

    const body = fs.readFileSync(archivePath)
    try {
      const {data} = await axios.get(deployApiUrl, {
        headers: {
          'auth-provider': 'dbAuth',
          'Content-Type': 'application/json',
          authorization: `Bearer ${getUserId()}`,
          Cookie: `session=${sessionToken}`,
        },
      })
      this.debug('uploadUrl:', data.uploadUrl)
      await axios.put(data.uploadUrl, body)
      this.log('Successfully deployed!')
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.message)
        if (error.response?.status === 401) console.error('Login with "happy login"')
      }

      if (error instanceof Error) this.error(error)
      if (typeof error === 'string') this.error(error)
    }
  }
}
