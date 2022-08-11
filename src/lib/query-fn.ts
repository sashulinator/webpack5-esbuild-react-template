import { QueryFunctionContext } from 'react-query'

/**
 * react-query в функцию запроса передает параметры в своем формате
 * но функция запроса ничего не должна знать об этом формате
 * поэтому делаем такой адаптер
 * */

export function queryAdapter<TData, TParams extends unknown[]>(cb: (...params: TParams) => Promise<TData>) {
  return (ctx: QueryFunctionContext): Promise<TData> => {
    const [, ...params] = ctx.queryKey
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return cb(...(params as any))
  }
}
