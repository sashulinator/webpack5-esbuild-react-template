import { InvalidServerDataError } from './invalid-server-data-error'
import { AxiosResponse } from 'axios'
import * as R from 'ramda'

const validateServerData = R.curry((assertion: <T>(t: T) => asserts t is T, response: AxiosResponse) => {
  try {
    assertion(response.data)
  } catch (error) {
    if (error instanceof Error) {
      throw new InvalidServerDataError(error, response)
    }

    throw error
  }
})

export default validateServerData
