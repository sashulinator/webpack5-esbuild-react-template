import api from './api-axios'
import { AxiosResponse } from 'axios'
import {
  // UseQueryOptions,
  useQuery,
} from 'react-query'

import { Any } from '@/types/common'
import { Options } from '@/types/options'

export interface Params {
  ids?: string[]
  type?: string[]
}

export type Data = Options
export type QueryKey = [string, number]
export type QueryError = Any

export async function makeRequest(id: number): Promise<AxiosResponse<Data>> {
  const response = await api.get(`/api/v1/graphic-${id}`)
  return response
}

export function useGetOptions(
  // options: UseQueryOptions<Data, QueryError, Data, QueryKey>,
  id: number
) {
  return useQuery<Data, QueryError, Data, QueryKey>(
    [makeRequest.name, id],
    () => makeRequest(id).then(({ data }) => data),
    {
      staleTime: Infinity,
    }
  )
}
