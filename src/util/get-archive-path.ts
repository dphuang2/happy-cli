import {archiveDir, ensureConfigSetup} from './ensure-config-setup'

export const getArchivePath = (dev: boolean): string => {
  ensureConfigSetup(dev)
  return `${archiveDir(dev)}/${new Date().toISOString()}.tgz`
}
