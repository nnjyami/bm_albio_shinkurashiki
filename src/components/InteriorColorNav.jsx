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
  pointer-events: auto;
  width: 100%;
  z-index: 10;
  &::-webkit-scrollbar{
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: ${Config.grid * 0.5}px 0;
    width: 100%;
  }
  li {
    align-items: center;
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    color: #FFF;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-feature-settings: "palt";
    justify-content: center;
    line-height: 0.8;
    list-style: none;
    margin: 0;
    opacity: 0.85;
    padding: ${Config.grid * 0.5}px 0;
    pointer-events: auto;
    text-align: center;
    transition: all 400ms;
    width: 23%;
    &.isCurrent {
      background-color: rgba(0,0,0,.55);
      border: 1px solid rgba(0,0,0,.8);
    }
  }
`


export default InteriorColorNav