import { ErrorWithCode } from '@savchenko91/schema-validator'

export type QueryError = Error | ErrorWithCode

export interface LoginResponse {
  access_token: string
  refresh_token: string
}

export interface RegisterResponse {
  email: string
  role: null
}

export interface Transfer<Data> {
  meta: {
    code: number
  }
  dataBlock: Data
}
