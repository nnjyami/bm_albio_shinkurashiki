import { css, jsx } from '@emotion/react'
import Config from '../Config'

function SideText(props) {
  const c = ['walkThroughText']
  if (props.isReady) c.push('isReady')
  return (
    <ul className={c.join(' ')} css={SideTextStyle}>
      <li className="sideText_name">LE JADE CITY HASHIMOTO</li>
      <li className="sideText_navigation">{props.currentMode}</li>
    </ul>
  )
}

const SideTextStyle = css`
  bottom: 0;
  display: flex;
  margin: 0;
  max-width: 400px;
  left: ${Config.grid * 1}px;
  opacity: 0;
  padding: 0;
  position: absolute;
  transform-origin: top left;
  transform: rotate(-90deg) translate(0, 0);
  transition: transform 850ms ease-out, opacity 500ms;
  transition-delay: 2.5s;
  width: 90%;
  &.isReady {
    opacity: 1;
    transform: rotate(-90deg) translate(0, 0);
  }
  li {
    color: rgba(255,255,255,.8);
    font-family: ${Config.font.family};
    font-weight: ${Config.font.weight};
    font-style: ${Config.font.style};
    font-size: 11px;
    list-style: none;
    margin: 0;
  }
  .sideText_name {
  }
  .sideText_navigation {
    &::before {
      background-color: rgba(255,255,255,.65);
      content: "";
      display: inline-block;
      height: 1px;
      margin-left: ${Config.grid * 3}px;
      margin-right: ${Config.grid * 3}px;
      transform: translateY(-300%);
      width: ${Config.grid * 5}px;
    }
  }
`

export default SideText