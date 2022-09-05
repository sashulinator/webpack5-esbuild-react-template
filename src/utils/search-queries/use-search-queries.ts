import { parse } from './parse'
import { useHistory } from 'react-router-dom'

export function useSearchQueries<SearchQueries>(): SearchQueries {
  const history = useHistory()

  return parse<SearchQueries>(history.location.search)
}
