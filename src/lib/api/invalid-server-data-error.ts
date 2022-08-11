import { Any } from '@/types/common'
import { InterruptedError } from '@/utils/interrupted-error'

export class InvalidServerDataError extends InterruptedError {
  response: { url: string }

  constructor(originError: Error, response: Any) {
    super('Invalid Server Data', 'invalidServerData', originError)
    this.response = response
  }
}
