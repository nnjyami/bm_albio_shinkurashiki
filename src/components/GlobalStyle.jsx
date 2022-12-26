import { Global, css } from '@emotion/react'
import Config from '../Config'

function GlobalStyle(props) {
  return (
    <>
      <Global
        styles={globalCss} />
    </>
  )
}

const globalCss = css`
  .font-reimin {
    font-family: a-otf-ud-reimin-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
  }
  .font-minion {
    font-family: minion-pro-display, serif;
    font-weight: 600;
    font-style: normal;
  }
`

export default GlobalStyle