import {ensureConfigSetup, happyDir} from './ensure-config-setup'

export const getUserIdPath = (dev: boolean): string => {
  ensureConfigSetup(dev)
  return `${happyDir(dev)}/user.txt`
}
