import { getCurrent, setPreviousRoute } from '@savchenko91/rc-route-constant'

import './reset.css'

import './common.css'
import './index.css'
import './layout.css'
import './toast.css'
import './utils.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import DocumentTitle from './document-title'
import RootRoutes from './root-routes'
import useUser from './use-user'
import clsx from 'clsx'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import ROUTES from '@/constants/routes'
import Header from '@/shared/header'

export default function Layer(): null | JSX.Element {
  useLocation()

  const { isLoading } = useUser()

  if (isLoading) {
    return null
  }

  setPreviousRoute(ROUTES)

  const notFoundLayout = ['main', 'header']
  const layout = getCurrent(ROUTES)?.PAYLOAD.layout.sort() || notFoundLayout

  return (
    <PerfectScrollbar className={clsx('Layout', layout.join('-'))}>
      <DocumentTitle />
      {layout.includes('header') && <Header />}
      {layout.includes('nav') && <div className="NavPanel">NavPanel</div>}
      <RootRoutes />
      <ToastContainer />
    </PerfectScrollbar>
  )
}
