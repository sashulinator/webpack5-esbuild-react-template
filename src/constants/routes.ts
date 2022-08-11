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
  // return id ? `${this.PATH}/${id}` : this.PATH
}

export type Routes = typeof ROUTES

export default ROUTES
