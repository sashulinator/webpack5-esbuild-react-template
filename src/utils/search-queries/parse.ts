import { booleanDecoder } from './boolean-decoder'
import type { IParseOptions } from 'qs'
import * as qs from 'qs'

import { AnyRecord } from '@/types/common'

export function parse<Qs extends AnyRecord>(str = '', options?: IParseOptions): Qs {
  return qs.parse(str, { ...options, ignoreQueryPrefix: true, decoder: booleanDecoder }) as Qs
}
