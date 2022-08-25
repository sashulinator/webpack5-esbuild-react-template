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
      {
        type: 'dashboard',
        id: 'a97aeab2-5ac0-427e-a84d-37a3b66c3e53',
      },
    ],
  })

  return data.token
}
