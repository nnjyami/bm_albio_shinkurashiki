import { jsx, css, keyframes } from '@emotion/react'
import { ReactSVG } from 'react-svg'

import Config from '../Config'

import LogoSvg from '../assets/logo.svg'

function ContentsNav(props) {
  const navClass = ["contentsNav"]
  if (props.showContentsNav) navClass.push("isShow")

  // 各RoomType内のサブコンテンツ
  const subContentsNav = Object.keys(Config.modes)
                        .filter(
                          mode => Config.modes[mode].isSubContents && 
                          Config.modes[mode].parent === 'ROOM_PLAN'
                        ).map(contentKey => {
                          const c = ['contentsNav']
                          if(contentKey === props.currentMode) c.push('isCurrent')
                          return(
                            <li className={c.join(' ')} 
                                css={contentsNavLink}
                                onClick={() => props.modeChangeHandler(contentKey)}>
                              <span
                                className="lead" 
                                css={contentsNavLinkLead}>{Config.modes[contentKey].title}</span>
                              <p className="description" css={contentsNavLinkDec}><span>{Config.modes[contentKey].description}</span></p>
                            </li>
                          )
                        });
  // RoomTypeごとにナビゲーション生成
  const roomNav = Object.keys(Config.roomTypes).map(roomKey => {
    const c = ['roomTab']
    if(roomKey === props.currentRoomType) c.push('isCurrent')
    return(
      <li className={c.join(' ')}>
        {Config.roomTypes[roomKey].name}
      </li>
    )
  })
  // コンテンツ
  const nav = Object.keys(Config.modes)
              .filter(
                mode => !Config.modes[mode].isSubContents
              )
              .map(mode => {
                const c = ['contentsNav']
                if(mode === props.currentMode) c.push('isCurrent')
                return(
                  <li className={c.join(' ')} css={contentsNavLink}
                    onClick={() => props.modeChangeHandler(mode)}>
                    <span className="lead" css={contentsNavLinkLead}>{Config.modes[mode].title}</span>
                    <p className="description" css={contentsNavLinkDec}><span>{Config.modes[mode].description}</span></p>
                    {
                      mode === 'ROOM_PLAN' && <>
                        <ul css={roomTabs}>
                          {roomNav}
                        </ul>
                        <ul css={subContents}>
                          {subContentsNav}
                        </ul>
                      </>
                    }
                  </li>
                )
              });

  return (
    <nav className={navClass.join(' ')} css={contentsNav}>
      <p className="contentsNavTitle">
        <ReactSVG 
          style={{ fill: "#FFF!important" }}
          className="svg" 
          src={LogoSvg} />
      </p>
      <ul>
        {nav}
        <li className="contentsNav" css={contentsNavLink}>
          <ul className="contentsSubLinks">
            <li><a href="https://misawa-chugoku.jp/albio/shinkurashikiekimae/outline/">→ 物件概要</a></li>
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
  padding: ${Config.grid * 5}px 0 0;
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
    .lead {
      transform: translateY(0);
    }
    .description {
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
    padding: 0;
    li {
      pointer-events: auto;
    }
  }
  .contentsNavTitle {
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 ${Config.grid * 2}px;
    padding: 0 ${Config.grid * 2}px 0;
    position: relative;
    text-align: center;
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
  padding: ${Config.grid * 0.5}px ${Config.grid * 3}px 0;
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
  font-size: 12px;
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
const roomTabs = css`
  color: rgba(255,255,255,1);
  display: flex;
  justify-content: space-between;
  margin-top: ${Config.grid * 1}px;
  width: 100%;
  .roomTab {
    border: 1px solid rgba(255,255,255,.3);
    border-bottom: none;
    line-height: ${Config.grid * 4}px;
    list-style: none;
    padding: 0 ${Config.grid * 1.5}px;
    text-align: center;
    &.isCurrent {
      background-color: rgba(255,255,255,.65);
      color: rgba(50,50,50,1);
    }
  }
`
const subContents = css`
  background-color: rgba(255,255,255,.65);
  line-height: 1.3;
  margin-bottom: ${Config.grid * 2}px;
  .contentsNav {
    padding: ${Config.grid * 0.5}px ${Config.grid * 2}px;
    .lead {
      color: rgba(50,50,50,.8);
      font-size: 16px;
      line-height: 1.2;
    }
    .description {
      color: rgba(50,50,50,.65);
      font-size: 10px;
      line-height: 1;
    }
  }
`

export default ContentsNav