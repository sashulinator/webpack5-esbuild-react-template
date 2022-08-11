import { HistoryLinkedList } from './history-linked-list'
import { useMemo } from 'react'

import { useForceUpdate } from '@/utils/use-force-update'

export function useHistoryLinkedList<T>(data: T): HistoryLinkedList<T> {
  const update = useForceUpdate()

  const state = useMemo(() => {
    const dll = new HistoryLinkedList<T>()

    dll.onInsertedLast = update

    dll.insertLast(data)

    return dll
  }, [])

  return state
}
