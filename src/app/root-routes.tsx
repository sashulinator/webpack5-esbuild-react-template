import ROUTES from '../constants/routes'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from '@/pages/login'
import NotFoundPage from '@/pages/not-found/not-found'
import UserProfilePage from '@/pages/user-profile/user-profile'

// https://github.com/remix-run/react-router/issues/8794
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RouteAny = Route as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SwitchAny = Switch as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const SwitchTransitionAny = SwitchTransition as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const CSSTransitionAny = CSSTransition as any

export default function RootRoutes() {
  return (
    // <SwitchTransitionAny mode="out-in">
    // <CSSTransitionAny key={location.pathname} timeout={100} classNames="appearVertically">
    <SwitchAny location={location}>
      <RouteAny path={ROUTES.LOGIN.PATH}>
        <LoginPage />
      </RouteAny>
      <RouteAny path={ROUTES.USER_PROFILE.PATH}>
        <UserProfilePage />
      </RouteAny>
      <RouteAny path="*">
        <NotFoundPage />
      </RouteAny>
    </SwitchAny>
    // </CSSTransitionAny>
    // </SwitchTransitionAny>
  )
}
