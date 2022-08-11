import { ErrorWithCode } from '@savchenko91/schema-validator'

import { Any } from '@/types/common'

export class ValidationCollectorError extends ErrorWithCode {
  errors: Any
  input: Any

  constructor(errors: Any, input: Any, message = 'Validation error.', code = 'validationCollectorError') {
    super(message, code)
    this.errors = errors
    this.input = input
  }
}
