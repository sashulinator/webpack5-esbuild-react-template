import { hasId } from './is'

export function assertHasId(input: unknown): asserts input is { id: string } {
  if (!hasId(input)) {
    throw new Error('has not id!')
  }
}
