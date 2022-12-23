import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

import LogoSvg from '../assets/logo_2.svg'

function IntroCover(props) {
  const c = ["IntroCover"]
  if (props.isReady) c.push('isReady')
  return (
    <div className={c.join(' ')} css={cover}>
      <img src={LogoSvg} css={titleStyle} />
    </div>
  )
}


const logoFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cover = css`
  align-items: center;
  background-color: #FFF;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 500;
  transition: opacity 2.7s ease-out 0.8s;
  &.isReady {
    opacity: 0;
  }
`
const titleStyle = css`
  animation: ${logoFade} 1s;
`

export default IntroCover