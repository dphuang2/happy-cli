import * as os from 'node:os'
import * as path from 'node:path'
import * as fs from 'node:fs'

const HAPPY_DIR_NAME = '.happy'
const ARCHIVE_DIR_NAME = 'archive'

export const HAPPY_DIR = path.join(os.homedir(), HAPPY_DIR_NAME)
export const ARCHIVE_DIR = path.join(HAPPY_DIR, ARCHIVE_DIR_NAME)

export const generateArchivePath = (): string => {
  if (!fs.existsSync(ARCHIVE_DIR))
    fs.mkdirSync(ARCHIVE_DIR, {recursive: true})
  return `${ARCHIVE_DIR}/${new Date().toISOString()}.tgz`
}
