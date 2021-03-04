import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #794BC4;
    --text-color: rgba(255,255,255,.7);
    --bg-color: #15202B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
`

export const CommonLimiter = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`

export default GlobalStyle
