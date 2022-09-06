import { Option, SelectField } from '@admiral-ds/react-ui'

import './analytic-1.css'

import React, { useLayoutEffect } from 'react'

import { fetchGuestToken } from '@/api/guest-token'
import { creditTypeItems } from '@/constants/credit-type'
import { sourceItems } from '@/constants/source'
import { applyNewQuery } from '@/lib/apply-new-query'
import { AnyRecord } from '@/types/common'
import { embedDashboard } from '@/utils/embed-dashboard'
import { useSearchQueries } from '@/utils/search-queries/use-search-queries'

export default function Analytic1(): JSX.Element {
  const searchQueries = useSearchQueries<AnyRecord>()

  useLayoutEffect(() => {
    const el1 = document.getElementById('analytic1')
    if (el1) {
      embedDashboard({
        id: 'ebe0d476-e21f-4b7f-9873-0214305125ec',
        supersetDomain: 'http://10.4.40.3:8088',
        mountPoint: el1,
        fetchGuestToken,
        dashboardUiConfig: { hideTitle: true },
        searchQueries,
      }).catch((error) => {
        console.log(error)
      })
    }
  }, [searchQueries])

  const render_id = JSON.stringify(searchQueries)

  return (
    <main className="Main Analytic1" style={{ padding: '32px' }}>
      <section key={render_id} style={{ display: 'flex', flexDirection: 'row', marginBottom: '24px' }}>
        <div style={{ width: '300px' }}>
          <SelectField
            id="source"
            label="Источник"
            value={searchQueries.source}
            displayClearIcon={searchQueries.source}
            onChange={applyNewQuery('source', searchQueries)}
          >
            {sourceItems.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </SelectField>
        </div>
        <div style={{ width: '300px', marginLeft: '24px' }}>
          <SelectField
            id="credit_type"
            label="Тип счёта"
            value={searchQueries.credit_type}
            displayClearIcon={searchQueries.credit_type}
            onChange={applyNewQuery('credit_type', searchQueries)}
          >
            {creditTypeItems.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </SelectField>
        </div>
      </section>
      <div className="analytic" id="analytic1" style={{ width: '100%' }} />
    </main>
  )
}
