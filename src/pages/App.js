import React from 'react'
import { ThemeProvider } from 'styled-components'
// import { createGlobalStyle } from 'styled-components'

import './App.css'
import Header from '../components/header'

import { theme } from '../config/theme'
import { GlobalStyle } from '../config/globalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header></Header>
      </>
    </ThemeProvider>
  )
}

export default App
