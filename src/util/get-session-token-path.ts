import {ensureConfigSetup, HAPPY_DIR} from './ensure-config-setup'

export const getSessionTokenPath = (): string => {
  ensureConfigSetup()
  return `${HAPPY_DIR}/session.txt`
}
