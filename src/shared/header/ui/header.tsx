import { Button } from '@admiral-ds/react-ui'

import './header.css'

import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import ROUTES from '@/constants/routes'

const Root = styled.header`
  padding: 0 24px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a7a7a7ea;
`

export default function Header(): JSX.Element {
  const history = useHistory()
  return (
    <Root className="Header">
      <div>LOGO</div>
      <div className="links">
        <Link to={ROUTES.ANALYTIC1.PATH}>График1</Link>
        <Link to={ROUTES.ANALYTIC2.PATH}>График2</Link>
        <Link to={ROUTES.ANALYTIC3.PATH}>График3</Link>
      </div>
      <Button dimension="s" onClick={() => history.push(ROUTES.LOGIN.PATH)}>
        Выйти
      </Button>
    </Root>
  )
}
