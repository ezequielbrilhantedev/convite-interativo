import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body,
  input,
  textarea,
  button {
    font-family: "HelveticaNeue", sans-serif;
  }
  a,
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ol,
  ul {
    list-style: none;
  }
`
