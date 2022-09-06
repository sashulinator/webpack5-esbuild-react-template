import { Option, SelectField } from '@admiral-ds/react-ui'

import './analytic-3.css'

import { creditTypeItems } from '../../constants/credit-type'
import { sourceItems } from '../../constants/source'
import { tonalityItems } from '../../constants/tonality'
import React, { useLayoutEffect } from 'react'

import { fetchGuestToken } from '@/api/guest-token'
import { applyNewQuery } from '@/lib/apply-new-query'
import { AnyRecord } from '@/types/common'
import { embedDashboard } from '@/utils/embed-dashboard'
import { useSearchQueries } from '@/utils/search-queries/use-search-queries'

export default function Analytic3(): JSX.Element {
  const searchQueries = useSearchQueries<AnyRecord>()

  useLayoutEffect(() => {
    const el3 = document.getElementById('analytic3')
    if (el3) {
      embedDashboard({
        id: 'a97aeab2-5ac0-427e-a84d-37a3b66c3e53',
        supersetDomain: 'http://10.4.40.3:8088',
        mountPoint: el3,
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
            displayClearIcon={searchQueries.source}
            value={searchQueries.source}
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
      <div className="analytic" id="analytic3" style={{ width: '100%' }} />
    </main>
  )
}
