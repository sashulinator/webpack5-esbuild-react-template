import { DARK_THEME, FontsVTBGroup } from '@admiral-ds/react-ui'

import App from './app'
// import GetUser from './get-user'
import ReactQuery from './react-query'
import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

const rootElement = document.getElementById('root')

if (rootElement) {
  render(
    <React.StrictMode>
      <ReactQuery>
        <ThemeProvider theme={DARK_THEME}>
          {/* <GetUser> */}
          <FontsVTBGroup />
          <App />
          {/* </GetUser> */}
        </ThemeProvider>
      </ReactQuery>
    </React.StrictMode>,
    rootElement
  )
}

// eslint-disable-next-line import/no-named-as-default-member
