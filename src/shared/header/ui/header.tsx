import { Button } from '@admiral-ds/react-ui'

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
  background-color: bisque;
`

export default function Header(): JSX.Element {
  const history = useHistory()
  return (
    <Root className="Header">
      <div>LOGO</div>
      <Button dimension="s" onClick={() => history.push(ROUTES.LOGIN.PATH)}>
        Выйти
      </Button>
    </Root>
  )
}
