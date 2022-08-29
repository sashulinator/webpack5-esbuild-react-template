import Route from '@savchenko91/rc-route-constant'

const ROUTES = {
  LOGIN: new Route({
    name: 'Авторизация',
    path: '/login',
    payload: {
      layout: ['main'],
    },
  }),

  USER_PROFILE: new Route({
    name: 'User profile',
    path: '/user-profile',
    payload: {
      layout: ['main'],
    },
  }),

  ANALYTIC1: new Route({
    name: 'Analytic',
    path: '/analytic-1',
    payload: {
      layout: ['main', 'header'],
    },
  }),

  ANALYTIC2: new Route({
    name: 'Analytic',
    path: '/analytic-2',
    payload: {
      layout: ['main', 'header'],
    },
  }),

  ANALYTIC3: new Route({
    name: 'Analytic',
    path: '/analytic-3',
    payload: {
      layout: ['main', 'header'],
    },
  }),
  // return id ? `${this.PATH}/${id}` : this.PATH
}

export type Routes = typeof ROUTES

export default ROUTES
