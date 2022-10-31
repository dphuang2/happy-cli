import {ARCHIVE_DIR, ensureConfigSetup} from './ensure-config-setup'

export const getArchivePath = (): string => {
  ensureConfigSetup()
  return `${ARCHIVE_DIR}/${new Date().toISOString()}.tgz`
}