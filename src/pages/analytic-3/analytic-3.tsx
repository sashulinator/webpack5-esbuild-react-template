import { embedDashboard } from '@superset-ui/embedded-sdk'

import './analytic-3.css'

import React, { useLayoutEffect } from 'react'

import { fetchGuestToken } from '@/api/guest-token'

export default function Analytic3(): JSX.Element {
  useLayoutEffect(() => {
    const el3 = document.getElementById('analytic3')
    if (el3) {
      embedDashboard({
        id: 'a97aeab2-5ac0-427e-a84d-37a3b66c3e53',
        supersetDomain: 'http://10.4.40.3:8088',
        mountPoint: el3,
        fetchGuestToken,
        dashboardUiConfig: { hideTitle: true },
      }).catch((error) => {
        console.log(error)
      })
    }
  }, [])

  return (
    <main className="Main Analytic1" style={{ padding: '32px' }}>
      <div className="analytic" id="analytic3" style={{ width: '100%' }} />
    </main>
  )
}
