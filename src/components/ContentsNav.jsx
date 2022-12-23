import { jsx, css, keyframes } from '@emotion/react'
import { ReactSVG } from 'react-svg'

import Config from '../Config'

import LogoSvg from '../assets/logo.svg'

function ContentsNav(props) {
  const navClass = ["contentsNav"]
  if (props.showContentsNav) navClass.push("isShow")
  return (
    <nav className={navClass.join(' ')} css={contentsNav}>
      <p className="contentsNavTitle">
        <ReactSVG 
          style={{ fill: "#FFF!important" }}
          className="svg" 
          src={LogoSvg} />
      </p>
      <ul>
        <li className="contentsNav"
          css={contentsNavLink}
          onClick={() => props.modeChangeHandler('WALK_THROUGH')}>
          <span className="contentsNavLinkLead" css={contentsNavLinkLead}>Concept</span>
          <p className="contentsNavLinkDec" css={contentsNavLinkDec}><span>コンセプト</span></p>
        </li>
        <li className="contentsNav" css={contentsNavLink}>
          <span className="contentsNavLinkLead" css={contentsNavLinkLead}>Room Plan</span>
          <p className="contentsNavLinkDec" css={contentsNavLinkDec}><span>ループプラン</span></p>
        </li>
        <li className="contentsNav"
          css={contentsNavLink}
          onClick={() => props.modeChangeHandler('TREES_PLANTS')}>
          <span className="contentsNavLinkLead" css={contentsNavLinkLead}>Color Options</span>
          <p className="contentsNavLinkDec" css={contentsNavLinkDec}><span>カラーオプション</span></p>
        </li>
        <li className="contentsNav" css={contentsNavLink}>
          <span className="contentsNavLinkLead" css={contentsNavLinkLead}>Facilities</span>
          <p className="contentsNavLinkDec" css={contentsNavLinkDec}><span>設備</span></p>
        </li>
        <li className="contentsNav" css={contentsNavLink}>
          <ul className="contentsSubLinks">
            <li><a href="https://misawa-chugoku.jp/albio/shinkurashikiekimae/outline/">→ 物件概要</a></li>
            <li><a href="https://misawa-chugoku.jp/albio/brand/">→ アルビオ・ガーデンについて</a></li>
          </ul>
          <ul className="contentsCV">
            <li><a className="contentsCV_btn" href="https://www.misawa.co.jp/jsp/mgform/63401/4988/index.jsp?_ebx=28kodhecilt.1671168029.7ohdtvl">資料請求</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideLeftWrap = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const contentsNav = css`
  background-color: rgba(45, 45, 45, 0);
  backdrop-filter: blur(0);
  left: -100%;
  height: 100%;
  margin: 0;
  padding: ${Config.grid * 8}px 0 0;
  position: absolute;
  top: 0;
  transition: all 550ms;
  width: ${Config.grid * 40}px;
  z-index: 90;
  &.isShow {
    background-color: rgba(45, 45, 45, .4);
    backdrop-filter: blur(4px);
    left: 0;
    transition: all 750ms;
    .contentsNavLinkLead {
      transform: translateY(0);
    }
    .contentsNavLinkDec {
      transform: translateX(0);
      span {
        transform: translateX(0);
      }
    }
  }
  * {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      pointer-events: auto;
    }
  }
  .contentsNavTitle {
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    margin: ${Config.grid * 3}px 0 ${Config.grid * 4}px;
    padding: ${Config.grid * 4}px ${Config.grid * 4}px 0;
    position: relative;
    z-index: 200;
    .st0 {
      fill: #FFF;
    }
  }
  .contentsSubLinks,
  .contentsCV {
    li {
      font-size: 13px;
      list-style: none;
      margin-bottom: ${Config.grid * 1}px;
    }
    a {
      color: #FFF;
    }
  }
  .contentsSubLinks {
    margin: ${Config.grid * 2}px 0 ${Config.grid * 3}px;
  }
  .contentsCV {
    &_btn {
      border: 1px solid rgba(255,255,255,.75);
      font-size: 14px;
      display: inline-block;
      padding: ${Config.grid}px 0;
      text-align: center;
      width: 100%;
    }
  }
`

const contentsNavLink = css`
  border-top: 1px solid rgba(255,255,255,.3);
  font-size: 12px;
  list-style: none;
  margin: 0;
  padding: ${Config.grid * 0.5}px ${Config.grid * 4}px 0;
  position: relative;
  z-index: 320;
`
const contentsNavLinkLead = css`
  color: #FFF;
  display: inline-block;
  font-size: 18px;
  font-family: ${Config.font.family};
  font-weight: ${Config.font.weight};
  font-style: ${Config.font.style};
  transition: transform 1s;
  transform: translateY(-50%);
  width: 100%;
`
const contentsNavLinkDec = css`
  color: rgba(255,255,255,.8);
  display: inline-block;
  line-height: 1.2;
  overflow: hidden;
  transform: translateX(-100%);
  transition: transform 1.2s;
  span {
    display: inline-block;
    transform: translateX(100%);
    transition: transform 1.2s;
  }
`

export default ContentsNav