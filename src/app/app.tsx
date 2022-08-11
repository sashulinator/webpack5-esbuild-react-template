import history from './history'
import './i18n'
import Layout from './layout'
import React from 'react'
import { Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

// https://github.com/remix-run/react-router/issues/8794
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RouterAny = Router as any

const App = () => {
  return (
    <RecoilRoot>
      <RouterAny history={history}>
        <Layout />
      </RouterAny>
    </RecoilRoot>
  )
}

export default App
