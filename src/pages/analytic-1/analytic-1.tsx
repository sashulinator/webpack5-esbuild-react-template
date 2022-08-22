import { embedDashboard } from '@superset-ui/embedded-sdk'

import './analytic-1.css'

import React, { useLayoutEffect } from 'react'

import { fetchGuestToken } from '@/api/guest-token'

export default function Analytic1(): JSX.Element {
  useLayoutEffect(() => {
    const el = document.getElementById('analytic1')
    if (el) {
      embedDashboard({
        id: 'ebe0d476-e21f-4b7f-9873-0214305125ec',
        supersetDomain: 'http://10.4.40.3:8088',
        mountPoint: el,
        fetchGuestToken,
        dashboardUiConfig: { hideTitle: true },
      }).catch((error) => {
        console.log(error)
      })
    }
  }, [])

  return (
    <main className="Main Analytic1">
      <div id="analytic1" style={{ width: '100%', height: '100%' }} />
    </main>
  )
}
