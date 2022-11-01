import * as fs from 'node:fs'
import {getUserIdPath} from './get-user-id-path'

export const getUserId = (dev: boolean): string => {
  return fs.readFileSync(getUserIdPath(dev), 'utf-8')
}
