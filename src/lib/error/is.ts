import { isObject } from 'lodash'

export function hasCode(input: unknown): input is Error & { code: string } {
  return isObject(input) && 'code' in input
}

export function hasMessage(input: unknown): input is { message: string } {
  return isObject(input) && 'message' in input
}
