import { Option, SelectField } from '@admiral-ds/react-ui'

import './analytic-3.css'

import { creditTypeItems } from './credit-type'
import { sourceItems } from './source'
import { tonalityItems } from './tonality'
import * as qs from 'qs'
import React, { useLayoutEffect } from 'react'

import { fetchGuestToken } from '@/api/guest-token'
import history from '@/app/history'
import { getValue } from '@/lib/dom-utils'
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

  return (
    <main className="Main Analytic1" style={{ padding: '32px' }}>
      <section style={{ display: 'flex', flexDirection: 'row', marginBottom: '24px' }}>
        <div style={{ width: '300px' }}>
          <SelectField
            id="tonality"
            label="Тональность"
            value={searchQueries.tonality}
            onChange={(event) => {
              const tonality = getValue(event)
              history.push(qs.stringify({ ...searchQueries, tonality }, { addQueryPrefix: true }))
            }}
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
            onChange={(event) => {
              const source = getValue(event)
              history.push(qs.stringify({ ...searchQueries, source }, { addQueryPrefix: true }))
            }}
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
            id="creditType"
            label="Тип счёта"
            value={searchQueries.creditType}
            onChange={(event) => {
              const creditType = getValue(event)
              history.push(qs.stringify({ ...searchQueries, creditType }, { addQueryPrefix: true }))
            }}
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
