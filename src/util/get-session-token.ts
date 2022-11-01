import * as fs from 'node:fs'
import {getSessionTokenPath} from './get-session-token-path'
export const getSessionToken = (dev: boolean): string | null => {
  if (!fs.existsSync(getSessionTokenPath(dev))) return null
  return fs.readFileSync(getSessionTokenPath(dev), 'utf-8')
}
