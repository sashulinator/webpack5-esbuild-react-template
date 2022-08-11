import { isObject } from '@savchenko91/schema-validator'

export function logError<A>(fn: (a: A) => unknown) {
  return (a: A): void => {
    try {
      fn(a)
    } catch (error) {
      if (isObject(error)) {
        console.log({ ...error })
      }

      throw error
    }
  }
}
