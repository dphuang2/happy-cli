import {Command, Flags, CliUx} from '@oclif/core'
import {getApiOrigin} from '../util/get-api-origin'
import axios, {AxiosError} from 'axios'
import {parse} from 'cookie'
import * as fs from 'node:fs'
import {getSessionTokenPath} from '../util/get-session-token-path'
import {getUserIdPath} from '../util/get-user-id-path'

export default class Login extends Command {
  static description = 'Login to dash.gethappy.dev'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    dev: Flags.boolean({char: 'd', hidden: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Login)
    const origin = getApiOrigin(flags)
    const loginApiUrl = `${origin}/auth`
    this.debug(loginApiUrl)
    this.log(`Logging into ${origin}`)
    const email = await CliUx.ux.prompt('What is your email?')
    const password = await CliUx.ux.prompt('What is your password?', {type: 'hide'})
    const payload = JSON.stringify({method: 'login', password, username: email})
    this.debug(payload)
    try {
      const {headers, data} = await axios.post(loginApiUrl, payload)

      const cookieString = headers['set-cookie']?.[0]
      if (cookieString === undefined) {
        this.error('Did not find cookieString')
      }

      this.debug('data:', data)

      const userId = data.id
      if (userId === undefined) {
        this.error('Unexpected return value')
      }

      this.debug('userIdPath:', getUserIdPath())
      this.debug('userId:', userId)
      fs.writeFileSync(getUserIdPath(), userId.toString())

      const cookies = parse(cookieString)

      const session = cookies.session
      if (session === undefined) {
        this.error('Could not find session cookie')
      }

      fs.writeFileSync(getSessionTokenPath(), session)
      this.log(`Successfuly logged in as ${email}`)
    } catch (error) {
      if (!(error instanceof AxiosError)) {
        if (error instanceof Error) this.error(error)
        if (typeof error === 'string') this.error(error)
      }

      if (error instanceof AxiosError) {
        this.error(error.message)
      }
    }
  }
}
