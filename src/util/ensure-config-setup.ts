import * as os from 'node:os'
import * as path from 'node:path'
import * as fs from 'node:fs'

const happyDirName = (dev: boolean) => dev ? '.happy-dev' : '.happy'
const ARCHIVE_DIR_NAME = 'archive'

export const happyDir = (dev: boolean): string => path.join(os.homedir(), happyDirName(dev))
export const archiveDir = (dev: boolean): string => path.join(happyDir(dev), ARCHIVE_DIR_NAME)

export const ensureConfigSetup = (dev: boolean): void => {
  if (!fs.existsSync(archiveDir(dev)))
    fs.mkdirSync(archiveDir(dev), {recursive: true})
}
