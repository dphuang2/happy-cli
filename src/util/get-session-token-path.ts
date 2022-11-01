import {ensureConfigSetup, happyDir} from './ensure-config-setup'

export const getSessionTokenPath = (dev: boolean): string => {
  ensureConfigSetup(dev)
  return `${happyDir(dev)}/session.txt`
}
