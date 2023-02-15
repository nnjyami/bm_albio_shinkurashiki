import React, { ReactElement, useEffect } from 'react'
import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

import plan from '../assets/Plan.png'
import InteriorColorNav from './InteriorColorNav'

import { useScroll } from '../hooks/useScroll'

const RoomMap = (props) => {
  const scroll = useScroll();

  useEffect(() => {
    scroll.setScrollPosition(scroll.getScrollHeight());
  }, [scroll]);

  const mapClass = props.showMap ? 'isShow' : ''
  // 各 Node の場所を設定する
  const points = Object.keys(Config.nodeCoordinate).map(v => {
    const value = Config.nodeCoordinate[v]
    const position = {
      top: 100 * value.y / Config.mapSize.h + '%',
      left: 100 * value.x / Config.mapSize.w + '%',
    }
    const c = ['pointLink']
    if (props.currentViewPoint == v) c.push('isCurrent')
    return (
      <li
        key={v}
        className={c.join(' ')}
        style={position}
        onClick={() => props.viewPointChangeHandler(v)}></li>
    )
  })
  const room = Config.roomTypes[props.currentRoomType]

  // RoomTypeごとにナビゲーション生成
  const roomNav = Object.keys(Config.roomTypes).map(roomKey => {
    const c = ['roomTab']
    if(roomKey === props.currentRoomType) c.push('isCurrent')
    return(
      <li key={roomKey} className={c.join(' ')}>
        {Config.roomTypes[roomKey].name}
      </li>
    )
  })
  return (
    <nav className={mapClass} css={mapStyle}>
      <div css={roomTabs}>
        <ul className="nav">
          {roomNav}
        </ul>
      </div>
      <ul css={mapTitle}>
        <li className="plan isAlphabet">{room.plan}</li>
        <li className="floor_space">住居専有面積<span className="isAlphabet">{room.space}</span>㎡</li>
      </ul>
      <ul css={colorOption}>
        <li className='label'>カラー</li>
        <li className='nav'>
        <InteriorColorNav
            currentNode={props.currentNode}
            currentViewPoint={props.currentViewPoint}
            currentInteriorColor={props.currentInteriorColor}
            isReady={props.isReady}
            colorChangeHandler={props.colorChangeHandler.bind(this)}
            nodeArray={Config.panoNodes[props.currentViewPoint]}
          />
        </li>
      </ul>
      {
        /*
      <p css={closeBtn} onClick={() => props.toggleMapVisible()}></p>
      <div className="mapWrap" ref={scroll.outerContentRef}>
        <ul className="pointLinkWrap">
          {points}
        </ul>
        <img className="mapImage" src={plan} ref={scroll.innerContentRef} />
      </div>
      */
      }
    </nav>
  )
}

const ripple1 = keyframes`
  0% {
    transform: translate(-9px, -9px) scale(1);
  }
  50% {
    transform: translate(-9px, -9px) scale(0.85);
  }
  100% {
    transform: translate(-9px, -9px) scale(1);
  }
`;
const ripple2 = keyframes`
  0% {
    transform: translate(-9px, -9px) scale(1);
  }
  50% {
    transform: translate(-9px, -9px) scale(1.2);
  }
  100% {
    transform: translate(-9px, -9px) scale(1);
  }
`;

const styles = {
  isCurrent: {
    animation: `${ripple2} 1.5s ease infinite`,
    backgroundColor: `${Config.color.main}`,
  },
}

const mapStyle = css`
  background: linear-gradient(rgba(240,240,240,.5), rgba(154, 154, 154, 1) 45%, rgba(154, 154, 154,1));
  backdrop-filter: blur(4px);
  // border-left: 1px solid ${Config.color.main};
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  height: 138px;
  position: absolute;
  bottom: 0;
  z-index: 200;
  pointer-events: auto;
  right: 0;
  transition: all 850ms;
  
  width: 100%;

  &.isShow {
    // border-left: 6px solid ${Config.color.main};
    right: 0;
    transition: all 650ms;
  }
  .mapWrap {
    position: relative;
    height: 100%;
    overflow: scroll;
    width: 100%;
    z-index: 30;

    max-width: 390px;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 390px;
      margin: 0 auto 0 50%;
    }
  }
  .pointLinkWrap {
    height: 583px;
    left: 0;
    margin: ${Config.grid * 10}px 0 ${Config.grid * 5}px;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 500;
  }
  .pointLink {
    animation: ${ripple1} 1.5s ease infinite;
    border: 4px solid ${Config.color.accent};
    border-radius: 50%;
    box-shadow: 1px 0 6px rgba(0,0,0,.2);
    cursor: pointer;
    height: 16px;
    list-style: none;
    position: absolute;
    width: 16px;
    &.isCurrent {
      animation: ${ripple2} 1.5s ease infinite;
      background-color: ${Config.color.accent};
      height: 10px;
      width: 10px;
    }
  }
  .mapImage {
    height: auto;
    padding: ${Config.grid * 10}px 0 ${Config.grid * 5}px;
    width: 100%;
  }
`
const mapTitle = css`
  align-items: center;
  background-color: rgba(0,0,0,.4);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  color: #FFF;
  display: flex;
  left: ${Config.grid * 1}px;
  line-height: 2;
  list-style: none;
  margin: 0;
  padding: ${Config.grid * 0.5}px ${Config.grid * 2}px;
  position: absolute;
  text-shadow: 0 0 3px rgba(0,0,0,.2);
  top: ${Config.grid * (5 + 1)}px;
  transition: left 650ms;
  transition-delay: 300ms;
  width: calc(100% - ${Config.grid * (1 + 2) * 2}px);
  z-index: 50;
  @media (min-width: 768px) {
    width: 400px;
  }
  .isShow & {
    left: ${Config.grid * 2}px;
  }
  li {
    padding: 0 ${Config.grid * 2}px 0 0;
    margin: 0;
  }
  .isAlphabet {
    font-family: ${Config.font.family};
    font-weight: ${Config.font.weight};
    font-style: ${Config.font.style};
  }
  .type {
    font-size: 14px;
    line-height: 1;
    margin-bottom: ${Config.grid * 3.5}px;
  }
  .name {
    font-size: 18px;
    line-height: 1;
    margin-bottom: ${Config.grid}px;
  }
  .plan {
    font-size: 16px;
  }
  .floor_space {
    font-size: 11px;
    .isAlphabet {
      font-size: 14px;
      padding: 0 ${Config.grid * 1}px;
    }
  }
`

const colorOption = css`
  align-items: center;
  background-color: rgba(0,0,0,.4);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  color: #FFF;
  display: flex;
  font-size: 11px;
  left: ${Config.grid * 1}px;
  line-height: 1.6;
  list-style: none;
  margin: 0;
  padding: ${Config.grid * 0.5}px ${Config.grid * 2}px;
  position: absolute;
  text-shadow: 0 0 3px rgba(0,0,0,.2);
  top: ${Config.grid * (4 + 7) + 2}px;
  transition: left 650ms;
  transition-delay: 300ms;
  width: calc(100% - ${Config.grid * (1 + 2) * 2}px);
  z-index: 50;
  .label {
    width: ${Config.grid * 5}px;
  }
  .nav {
    width: calc(100% - ${Config.grid * 5 + 0.5}px);
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`

const closeBtn = () => [
  css`
    cursor: pointer;
    display: block;
    height: ${Config.grid * 3}px;
    margin: 0;
    position: absolute;
    pointer-events: auto;
    right: ${Config.grid * 2}px;
    top: ${Config.grid * 2}px;
    width: ${Config.grid * 3}px;
    z-index: 550;
    &:before,
    &:after {
      background-color: #FFF;
      content: "";
      display: inline-block;
      height: ${Config.grid * 4}px;
      left: 50%;
      position: absolute;
      top: 50%;
      width: 2px;
    }
    &:before {
      transform: translate(-50%,-50%) rotate(60deg);
    }
    &:after {
      transform: translate(-50%,-50%) rotate(-60deg);
    }
  `
]
const roomTabs = css`
  background-color: rgba(0,0,0,.15);
  border-bottom: 1px solid rgba(0,0,0,.55);
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .2) inset;
  height: ${Config.grid * 5}px;
  padding: 0;
  margin: 0;
  width: 100%;
  .nav {
    color: rgba(255,255,255,1);
    display: flex;
    height: ${Config.grid * 4}px;
    justify-content: space-between;
    margin: 0;
    padding: ${Config.grid * 1}px ${Config.grid * 1}px 0;
    width: calc(100% - ${Config.grid * 1 * 2}px);
    @media (min-width: 768px) {
      width: 400px;
    }
  }
  .roomTab {
    background-color: rgba(0,0,0,.15);
    border-bottom: none;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 0 1px rgba(0, 0, 0, .4);
    line-height: ${Config.grid * 4}px;
    list-style: none;
    padding: 0 ${Config.grid * 2.5}px;
    text-align: center;
    &.isCurrent {
      background-color: rgba(0,0,0,.55);
      color: rgba(245,245,245,1);
    }
  }
`

export default RoomMap