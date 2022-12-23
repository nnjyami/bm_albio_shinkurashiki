import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

function LocalNav(props) {
  const points = Config.walkThroughPoints.map(point => {
    const c = []
    if (props.currentNode === point.node) c.push('isCurrent')
    return (
      <li
        key={point.id}
        onClick={() => props.nodeChangeHandler(point.node)}
      ><span className={c.join(' ')}>{point.name}</span></li>
    )
  })
  return (
    <div css={localNavStyle}>
      <ul>
        {points}
      </ul>
    </div>
  )
}

const localNavStyle = css`
  left: ${Config.grid}px;
  overflow-x: scroll;
  position: absolute;
  bottom: ${Config.grid * 2}px;
  pointer-events: auto;
  width: calc(100% - ${Config.grid * 2}px);
  z-index: 100;
  &::-webkit-scrollbar{
    display: none;
  }
  ul {
    display: flex;
    padding-left: 35%;
  }
  li {
    list-style: none;
    padding: ${Config.grid}px ${Config.grid * 1}px;
    text-align: center;
    span {
      display: inline-block;
      font-size: 11px;
      line-height: 1.2;
      padding-bottom: ${Config.grid * 1}px;
      position: relative;
      text-shadow: 0 0 3px rgba(0,0,0,.2);
      white-space: pre;
      &::after {
        background-color: rgba(255,255,255,.65);
        bottom: 0;
        content: '';
        border-radius: 2px;
        display: inline-block;
        height: 2px;
        left: 0;
        position: absolute;
        transition: all 300ms;
        width: 0;
      }
      &.isCurrent {
        &::after {
          width: 100%;
        }
      }
    }
  }
`


export default LocalNav