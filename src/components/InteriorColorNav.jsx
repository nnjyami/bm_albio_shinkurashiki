import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

function InteriorColorNav(props) {
  const colors = Config.interioColorOptions.map(color => {
    const c = ['interiorNav']
    if (props.currentInteriorColor === color.key) c.push('isCurrent')
    return (
      <li
        className={c.join(' ')}
        key={color.key}
        onClick={() => props.colorChangeHandler(color.key)}
      >
        <span>{`Color #${color.key + 1}`}</span>
        {color.name}
      </li>
    )
  })
  return (
    <div css={InteriorColorNavStyle}>
      <ul>
        {colors}
      </ul>
    </div>
  )
}

const InteriorColorNavStyle = css`
  left: 0;
  position: absolute;
  bottom: ${Config.grid * 2}px;
  pointer-events: auto;
  width: 100%;
  z-index: 10;
  &::-webkit-scrollbar{
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
    width: calc(100% - ${Config.grid * 3}px);
  }
  li {
    background-color: ${Config.color.main};
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    color: #FFF;
    cursor: pointer;
    font-size: 11px;
    font-feature-settings: "palt";
    line-height: 1.2;
    list-style: none;
    margin: 0 ${Config.grid}px;
    opacity: 0.85;
    padding: ${Config.grid}px 0;
    pointer-events: auto;
    text-align: center;
    transition: all 400ms;
    width: 24%;
    span {
      display: inline-block;
      font-size: 9px;
      opacity: 0.6;
      width: 100%;
    }
    &.isCurrent {
      box-shadow: 0 2px 8px rgba(0,0,0,.5);
      // opacity: 1;
      transform: translateY(${Config.grid * 1.5 * (-1)}px);
    }
  }
`


export default InteriorColorNav