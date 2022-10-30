import {Command, Flags} from '@oclif/core'
import * as findWorkspaceRoot from 'find-yarn-workspace-root'
import * as fs from 'node:fs'
import * as tar from 'tar'
import ignore from 'ignore'
import {generateArchivePath} from '../util/generate-archive-path'
import path = require('node:path')

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
    const root = findWorkspaceRoot() ?? './'
    process.chdir(root)
    const f = fs.readFileSync(`${root}/.gitignore`, 'utf-8')
    const ig = ignore().add(f.split('\n'))

    const archivePath = generateArchivePath()

    await tar.c({gzip: true, file: archivePath, filter(p) {
      const relativePath = path.relative(root, p)

      // Root dir, continue to recurse
      if (relativePath === '') return true

      if (relativePath.startsWith('.git')) return false

      return !ig.ignores(relativePath)
    }}, ['./'])

    this.debug(archivePath)

    this.log('Successfully deployed!')
  }
}
