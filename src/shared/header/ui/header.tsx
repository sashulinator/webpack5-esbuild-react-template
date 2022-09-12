import { Button } from '@admiral-ds/react-ui'

import './header.css'

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import ROUTES from '@/constants/routes'

const Root = styled.header`
  padding: 0 24px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 2px solid #c8c8c8;
`

const Left = styled.div`
  font-family: 'VTB Group UI', serif;
  display: flex;
  flex-direction: column;
`

export default function Header(): JSX.Element {
  const history = useHistory()

  return (
    <Root className="Header">
      <Left>
        <div style={{ margin: '0 0 8px' }}>Аналитика</div>
        <div className="links">
          <Button
            appearance={ROUTES.ANALYTIC1.isCurrent ? 'primary' : 'secondary'}
            dimension="s"
            onClick={() => history.push(`${ROUTES.ANALYTIC1.PATH}${history.location.search}`)}
          >
            ВТБ
          </Button>
          <Button
            appearance={ROUTES.ANALYTIC2.isCurrent ? 'primary' : 'secondary'}
            dimension="s"
            onClick={() => history.push(`${ROUTES.ANALYTIC2.PATH}${history.location.search}`)}
          >
            Топ слова
          </Button>
          <Button
            appearance={ROUTES.ANALYTIC3.isCurrent ? 'primary' : 'secondary'}
            dimension="s"
            onClick={() => history.push(`${ROUTES.ANALYTIC3.PATH}${history.location.search}`)}
          >
            Конкуренты
          </Button>
        </div>
      </Left>
      <Button dimension="s" onClick={() => history.push(ROUTES.LOGIN.PATH)}>
        Выйти
      </Button>
    </Root>
  )
}
