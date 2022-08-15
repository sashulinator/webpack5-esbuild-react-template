import { Button } from '@admiral-ds/react-ui'

import React from 'react'
import styled from 'styled-components'

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
  return (
    <Root className="Header">
      <div>LOGO</div>
      <Button dimension="s">Выйти</Button>
    </Root>
  )
}
