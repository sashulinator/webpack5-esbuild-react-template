import { getValue } from './dom-utils'
import * as qs from 'qs'

import history from '@/app/history'
import { Any, AnyRecord } from '@/types/common'

export function applyNewQuery(name: string, currentQueries: AnyRecord) {
  return (event: Any) => {
    const value = getValue(event) || null
    history.push(
      `${history.location.pathname}${qs.stringify(
        { ...currentQueries, [name]: value },
        { addQueryPrefix: true, skipNulls: true }
      )}`
    )
  }
}
