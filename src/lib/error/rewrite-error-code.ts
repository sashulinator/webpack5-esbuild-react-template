import { ErrorWithCode } from '@savchenko91/schema-validator'

import { hasCode } from './is'
import * as R from 'ramda'

export const rewriteErrorCode = R.curry(function setValidationErrorCodeRaw<T>(
  code: string,
  assertT: <T>(t: T) => asserts t is T,
  input: T
): T {
  try {
    assertT(input)
    return input
  } catch (error) {
    if (hasCode(error)) {
      const errorWithCode = new ErrorWithCode(error.message, code)
      throw { ...error, ...errorWithCode }
    }
    throw error
  }
})
