import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: #D9D2C2;
  }

  a {
    text-decoration: none;
    color: white;
  }

  input::placeholder {
  color: white;
  }

`

export { GlobalStyle }
