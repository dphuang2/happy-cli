import {ensureConfigSetup, HAPPY_DIR} from './ensure-config-setup'

export const getUserIdPath = (): string => {
  ensureConfigSetup()
  return `${HAPPY_DIR}/user.txt`
}
