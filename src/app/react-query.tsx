import './i18n'
import React, { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

interface ReactQueryProps {
  children: React.ReactNode
}

const ReactQuery = (props: ReactQueryProps) => {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </Suspense>
  )
}

export default ReactQuery
