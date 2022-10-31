import {Command, Flags} from '@oclif/core'
import * as findWorkspaceRoot from 'find-yarn-workspace-root'
import * as fs from 'node:fs'
import * as tar from 'tar'
import ignore from 'ignore'
import {generateArchivePath} from '../util/generate-archive-path'
import path = require('node:path')
import {generateApiUrl} from '../util/generate-api-url'
import axios from 'axios'
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

    const root = findWorkspaceRoot() ?? '.'
    this.debug('root:', root)
    process.chdir(root)
    const f = fs.readFileSync(`${root}/.gitignore`, 'utf-8')
    const ig = ignore().add(f.split('\n'))

    const archivePath = generateArchivePath()
    this.debug('archivePath:', archivePath)

    await tar.c({gzip: true, file: archivePath, filter(p) {
      const relativePath = path.relative(root, p)

      // Root dir, continue to recurse
      if (relativePath === '') return true

      if (relativePath.startsWith('.git')) return false

      return !ig.ignores(relativePath)
    }}, ['./'])

    const apiUrl = generateApiUrl(flags.dev)
    this.debug('apiUrl:', apiUrl)

    const body = fs.readFileSync(archivePath)
    const {data} = await axios.get(apiUrl)
    this.debug('uploadUrl:', data.uploadUrl)

    await axios.put(data.uploadUrl, body)

    this.log('Successfully deployed!')
  }
}
