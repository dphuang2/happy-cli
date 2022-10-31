import * as fs from 'node:fs'
import {getUserIdPath} from './get-user-id-path'

export const getUserId = (): string => {
  return fs.readFileSync(getUserIdPath(), 'utf-8')
}
