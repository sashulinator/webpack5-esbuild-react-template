import history from './history'
import './i18n'
import Layout from './layout'
import React from 'react'
import { Router } from 'react-router-dom'

// https://github.com/remix-run/react-router/issues/8794
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RouterAny = Router as any

const App = () => {
  return (
    <RouterAny history={history}>
      <Layout />
    </RouterAny>
  )
}

export default App
