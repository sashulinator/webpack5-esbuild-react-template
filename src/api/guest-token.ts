import api from './api-axios'

export async function fetchGuestToken() {
  const { data } = await api.post('api/v1/security/guest_token', {
    user: {
      username: 'Guest',
      first_name: 'guest',
      last_name: 'guest',
    },
    rls: [],
    resources: [
      {
        type: 'dashboard',
        id: 'ebe0d476-e21f-4b7f-9873-0214305125ec',
      },
    ],
  })

  return data.token
}
