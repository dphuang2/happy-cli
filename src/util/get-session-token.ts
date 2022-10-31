import * as fs from 'node:fs'
import {getSessionTokenPath} from './get-session-token-path'
export const getSessionToken = (): string | null => {
  if (!fs.existsSync(getSessionTokenPath())) return null
  return fs.readFileSync(getSessionTokenPath(), 'utf-8')
}
