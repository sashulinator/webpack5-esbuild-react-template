import { Any } from './common'

export type FindManyResponse<T> = {
  total: number
  items: T[]
}

export type CreateInput<Entity extends Record<string, Any>> = Omit<
  Entity,
  'id' | 'createdAt' | 'deletedAt' | 'updatedAt'
>

export type UpdateInput<Entity extends Record<string, unknown>> = Omit<
  Entity,
  'createdAt' | 'deletedAt' | 'updatedAt'
> & { id: string }
