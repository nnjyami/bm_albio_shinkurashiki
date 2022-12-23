import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

import Logo from '../components/Logo'

function Nav(props) {
  const navIndexStyle = ["navIndex"]
  if (props.showContentsNav) navIndexStyle.push("isHide")

  const hambugerMenuClass = []
  const navMapClass = ['navMap']
  if (props.showContentsNav) hambugerMenuClass.push('isClose')
  if (props.isReady) {
    hambugerMenuClass.push('isReady')
    navMapClass.push('isReady')
  }
  return (
    <header css={headerStyle}>
      <ul>
        <li
          className={hambugerMenuClass.join(' ')}
          css={[hambugerMenu]}
          onClick={() => props.toggleContentsNavVisible()}
        ></li>
        <li className={navIndexStyle.join(' ')}><Logo isReady={props.isReady} /></li>
        <li
          className={navMapClass.join(' ')}
          onClick={() => props.toggleMapVisible()}>間取り</li>
      </ul>
    </header>
  )
}

const headerStyle = css`
  ul {
    display: flex;
    justify-content: space-between;
    margin: ${Config.grid * 2}px auto 0;
    padding: 0;
    pointer-events: auto;
    position: relative;
    width: calc(100% - ${Config.grid * 1.5 * 2}px);
    z-index: 100;
  }
  li {
    color: ${Config.color.main};
    font-family: ${Config.font.family};
    font-weight: ${Config.font.weight};
    font-style: ${Config.font.style};
    text-shadow: 0 0 3px rgba(0,0,0,.2);
    list-style: none;
    &.navIndex {
      opacity: 1;
      width: 180px;
      &.isHide {
        opacity: 0;
      }
    }
    &.navMap {
      cursor: pointer;
      font-size: 16px;
      padding-top: 10px;

      transform: translateX(200%);
      transition: transform 850ms ease-out;
      transition-delay: 2.5s;

      &.isReady {
        transform: translateX(0);
      }
    }
  }
`

const hambugerMenu = css`
  cursor: pointer;
  display: block;
  height: ${Config.grid * 3}px;
  margin: 0;
  margin-right: 15px;
  pointer-events: auto;
  position: relative;
  width: ${Config.grid * 4}px;
  z-index: 500;

  transform: translateX(-200%);
  transition: transform 850ms ease-out;
  transition-delay: 2.5s;

  &.isReady {
    transform: translateX(0);
  }

  &::before,
  &::after {
    background-color: ${Config.color.main};
    content: "";
    display: inline-block;
    height: ${Config.grid * 4}px;
    left: 50%;
    position: absolute;
    top: 0;
    transition: all 300ms;
    width: 2px;
  }
  &::before {
    top: 0;
    transform: translate(50%,0) rotate(90deg);
  }
  &::after {
    top: 25%;
    transform: translate(50%,0) rotate(-90deg);
  }
  &.isClose {
    &::before,
    &::after {
      background-color: #FFF;
    }
    &::before {
      top: 50%;
      transform: translate(-50%,-50%) rotate(60deg);
    }
    &::after {
      top: 50%;
      transform: translate(-50%,-50%) rotate(-60deg);
    }
  }
`

export default Nav