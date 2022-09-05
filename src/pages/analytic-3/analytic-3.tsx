import { Button, DropMenu, MenuItem, RenderOptionProps } from '@admiral-ds/react-ui'

import './analytic-3.css'

import React, { useLayoutEffect, useMemo } from 'react'

import { fetchGuestToken } from '@/api/guest-token'
import history from '@/app/history'
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

  const items = [
    {
      id: 'позитив',
      label: 'позитив',
      value: 'позитив',
    },
    {
      id: 'негатив',
      label: 'негатив',
      value: 'негатив',
    },
    {
      id: 'нейтрально',
      label: 'нейтрально',
      value: 'нейтрально',
    },
  ]

  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: function MenuItemRender(options: RenderOptionProps) {
        return (
          <MenuItem dimension="s" {...options} key={item.id}>
            {item.label}
          </MenuItem>
        )
      },
    }))
  }, [])

  return (
    <main className="Main Analytic1" style={{ padding: '32px' }}>
      <section style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="analytic" id="analytic3" style={{ width: '100%' }} />
        <DropMenu
          style={{ zIndex: '100000' }}
          items={model}
          onChange={(id) => {
            console.log(`selected: ${id}`)
            history.push(`?tonality=${id}`)
          }}
          // onOpen={onOpenMenu}
          // onClose={onCloseMenu}
          // dimension={args.dimension}
          // disabled={args.disabled}
          // selected={selected}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
            return (
              <Button ref={buttonRef as React.Ref<HTMLButtonElement>} onKeyDown={handleKeyDown} onClick={handleClick}>
                Нажми
                {statusIcon}
              </Button>
            )
          }}
        />
      </section>
    </main>
  )
}
