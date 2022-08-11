import { Any, AnyRecord } from './common'

export type Package<TRecord = AnyRecord, TData = Any> = {
  data: TData
} & TRecord
