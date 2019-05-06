import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { THEME } from './constants/theme'
import Main from './components/main'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: ${p => p.theme.color.background};
  }
  #root {
    height: 100%;
  }

  * {
    margin: 0;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${p => p.theme.color.mainText};
  }
`
export default () => (
  <ThemeProvider theme={THEME}>
    <>
      <GlobalStyle />
      <Main />
    </>
  </ThemeProvider>
)
