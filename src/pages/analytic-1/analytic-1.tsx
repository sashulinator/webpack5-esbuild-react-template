import './analytic-1.css'

import React, { useLayoutEffect } from 'react'

import { fetchGuestToken } from '@/api/guest-token'
import { embedDashboard } from '@/utils/embed-dashboard'

export default function Analytic1(): JSX.Element {
  useLayoutEffect(() => {
    const el1 = document.getElementById('analytic1')
    if (el1) {
      embedDashboard({
        id: 'ebe0d476-e21f-4b7f-9873-0214305125ec',
        supersetDomain: 'http://10.4.40.3:8088',
        mountPoint: el1,
        fetchGuestToken,
        dashboardUiConfig: { hideTitle: true },
      }).catch((error) => {
        console.log(error)
      })
    }
  }, [])

  return (
    <main className="Main Analytic1" style={{ padding: '32px' }}>
      <div className="analytic" id="analytic1" style={{ width: '100%' }} />
    </main>
  )
}
