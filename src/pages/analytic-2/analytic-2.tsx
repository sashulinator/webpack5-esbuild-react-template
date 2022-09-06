import { Option, SelectField } from '@admiral-ds/react-ui'

import './analytic-2.css'

import React, { useLayoutEffect } from 'react'

import { fetchGuestToken } from '@/api/guest-token'
import { creditTypeItems } from '@/constants/credit-type'
import { sourceItems } from '@/constants/source'
import { tonalityItems } from '@/constants/tonality'
import { applyNewQuery } from '@/lib/apply-new-query'
import { AnyRecord } from '@/types/common'
import { embedDashboard } from '@/utils/embed-dashboard'
import { useSearchQueries } from '@/utils/search-queries/use-search-queries'

export default function Analytic2(): JSX.Element {
  const searchQueries = useSearchQueries<AnyRecord>()

  useLayoutEffect(() => {
    const el2 = document.getElementById('analytic2')
    if (el2) {
      embedDashboard({
        id: 'b2d75c0c-9e27-41d3-9bd9-c02182aa5b7c',
        supersetDomain: 'http://10.4.40.3:8088',
        mountPoint: el2,
        fetchGuestToken,
        dashboardUiConfig: { hideTitle: true },
        searchQueries,
      }).catch((error) => {
        console.log('error', error)
      })
    }
  }, [searchQueries])

  const render_id = JSON.stringify(searchQueries)

  return (
    <main className="Main Analytic1" style={{ padding: '32px' }}>
      <section key={render_id} style={{ display: 'flex', flexDirection: 'row', marginBottom: '24px' }}>
        <div style={{ width: '300px' }}>
          <SelectField
            id="tonality"
            label="Тональность"
            value={searchQueries.tonality}
            displayClearIcon={searchQueries.tonality}
            onChange={applyNewQuery('tonality', searchQueries)}
          >
            {tonalityItems.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </SelectField>
        </div>
        <div style={{ width: '300px', marginLeft: '24px' }}>
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
      <div className="analytic" id="analytic2" style={{ width: '100%' }} />
    </main>
  )
}
