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
      {
        type: 'dashboard',
        id: 'b2d75c0c-9e27-41d3-9bd9-c02182aa5b7c',
      },
    ],
  })

  return data.token
}
