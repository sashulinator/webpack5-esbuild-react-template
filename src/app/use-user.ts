import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'

// import history from '@/app/history'

export default function useUser() {
  useLocation()

  const { isLoading, data, isError } = useQuery(['refresh'], () => undefined)

  // if (location.pathname === '/') {
  //   history.push('/')
  // }

  return { isLoading, data, isError }
}
