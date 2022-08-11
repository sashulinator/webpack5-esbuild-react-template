import { isString } from '@savchenko91/schema-validator'

import { hasCode, hasMessage } from './is'

export default function getErrorKey(error: unknown): string {
  const key = hasCode(error) ? error.code : hasMessage(error) ? error.message : isString(error) ? error : undefined

  if (key === undefined) {
    throw new Error('Error cannot be translated')
  }

  return key
}
