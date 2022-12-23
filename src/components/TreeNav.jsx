import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

function TreeNav(props) {
  const points = Config.treeCoordinate.map(tree => {
    const c = []
    // if (props.currentNode === point.node) c.push('isCurrent')
    return (
      <li
        className="treeNav"
        key={tree.id}
        onClick={() => props.nodeChangeHandler(point.node)}
      >
        <img src={`./assets/tree/${tree.id}.png`} />
        <span className={c.join(' ')}>{tree.name}</span>
      </li>
    )
  })
  return (
    <div css={TreeNavStyle}>
      <ul>
        {points}
      </ul>
    </div>
  )
}

const TreeNavStyle = css`
  left: ${Config.grid}px;
  overflow-x: scroll;
  position: absolute;
  bottom: ${Config.grid * 2}px;
  pointer-events: auto;
  width: 100%;
  z-index: 10;
  &::-webkit-scrollbar{
    display: none;
  }
  ul {
    align-items: flex-end;
    display: flex;
    padding-left: 35%;
  }
  li {
    font-size: 12px;
    list-style: none;
    padding: ${Config.grid}px ${Config.grid * 1}px;
    text-align: center;
    width: 120px;
    img {
      width: 80px;
    }
    span {
      display: inline-block;
      width: 100%;
    }
  }
`


export default TreeNav