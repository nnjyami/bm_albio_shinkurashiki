import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

import Logo from '../components/Logo'

function Nav(props) {
  const navIndexStyle = ["navIndex"]
  const hambugerMenuClass = []
  const navMapClass = ['navMap']
  if (props.showContentsNav){
    hambugerMenuClass.push('isClose')
    navIndexStyle.push("isHide")
    navMapClass.push("isHide")
  }
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
    z-index: 300;
  }
  li {
    color: ${Config.color.main};
    list-style: none;
    &.navIndex {
      opacity: 1;
      transform: translate(8px, -4px);
      width: 180px;
      &.isHide {
        opacity: 0;
      }
    }
    &.navMap {
      cursor: pointer;
      font-size: 14px;
      opacity: 1;
      padding-top: 5px;

      transform: translateX(200%);
      transition: transform 850ms ease-out;
      transition-delay: 2.5s;

      &.isReady {
        transform: translateX(0);
      }
      &.isHide {
        opacity: 0;
      }
    }
  }
`

const hambugerMenu = css`
  cursor: pointer;
  display: block;
  height: ${Config.grid * 3}px;
  margin: 0;
  // margin-right: ${Config.grid * 1}px;
  pointer-events: auto;
  position: relative;
  width: ${Config.grid * 3}px;
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
    height: ${Config.grid * 3}px;
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