import LogoSvg from '../assets/logo.svg'

import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

function Logo(props) {
  const c = []
  if (props.isReady) c.push('isReady')
  return (
    <p className={c.join(' ')} css={logoStyle}>
      <img src={LogoSvg} />
    </p>
  )
}

const logoStyle = css`
  display: inline-block;
  margin: 0;
  width: 70px;
  z-index: 600;

  opacity: 0;
  transform-origin: center;
  transform: scale(1.5);
  transition: transform 1600ms ease-out, opacity 1000ms;
  transition-delay: 2s;

  &.isReady {
    opacity: 1;
    transform: scale(1);
  }
  img {
    opacity: 0.9;
    width: 70px;
  }
`

export default Logo