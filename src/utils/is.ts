import { isObject } from '@savchenko91/schema-validator'

export function hasId<T>(input: T): input is T & { id: string } {
  return isObject(input) && 'id' in input
}
