import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

import plan from '../assets/Plan.png'

function VrMap(props) {
  const mapClass = props.showMap ? 'isShow' : ''
  // 各 Node の場所を設定する
  const points = Object.keys(Config.nodeCoordinate).map(v => {
    const value = Config.nodeCoordinate[v]
    const position = {
      top: 100 * value.y / Config.mapSize.h + '%',
      left: 100 * value.x / Config.mapSize.w + '%',
    }
    const css = [styles.pointLink]
    if (props.currentNode == v) css.push(styles.isCurrent)
    return (
      <li
        key={v}
        className="pointLink"
        style={position}
        onClick={() => props.viewPointChangeHandler(v)}></li>
    )
  })
  return (
    <nav className={mapClass} css={mapStyle}>
      <ul css={mapTitle}>
        <li className="type">ルームプラン</li>
        <li className="name isAlphabet">Type A</li>
        <li className="plan isAlphabet">4LDK + SC</li>
        <li className="floor_space">住居専有面積<span className="isAlphabet">82.04</span>㎡</li>
      </ul>
      <p css={closeBtn} onClick={() => props.toggleMapVisible()}></p>
      <div className="mapWrap">
        <ul className="pointLinkWrap">
          {points}
        </ul>
        <img className="mapImage" src={plan} />
      </div>
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
  background-color: rgba(45, 45, 45, .5);
  backdrop-filter: blur(4px);
  // border-left: 1px solid ${Config.color.main};
  box-shadow: -8px 0 10px rgba(0, 0, 0, .3);
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 500;
  pointer-events: auto;
  right: -150%;
  transition: all 850ms;
  
  width: 70%;
  max-width: 480px;

  &.isShow {
    // border-left: 6px solid ${Config.color.main};
    right: 0;
    transition: all 650ms;
  }
  .mapWrap {
    position: relative;
    transform: translateY(50%);
    width: 100%;
  }
  .pointLinkWrap {
    height: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 500;
  }
  .pointLink {
    animation: ${ripple1} 1.5s ease infinite;
    border: 4px solid ${Config.color.main};
    border-radius: 50%;
    box-shadow: -2px 0 6px 2px rgba(0,0,0,.4);
    cursor: pointer;
    height: 18px;
    list-style: none;
    position: absolute;
    width: 18px;
  }
  .mapImage {
    height: auto;
    width: 100%;
  }
`
const mapTitle = css`
  color: #FFF;
  left: ${Config.grid * 8}px;
  line-height: 1.4;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  text-shadow: 0 0 3px rgba(0,0,0,.2);
  top: ${Config.grid * 2}px;
  transition: left 650ms;
  transition-delay: 300ms;
  .isShow & {
    left: ${Config.grid * 3}px;
  }
  .isAlphabet {
    font-family: ${Config.font.family};
    font-weight: ${Config.font.weight};
    font-style: ${Config.font.style};
  }
  .type {
    font-size: 16px;
    line-height: 1;
    margin-bottom: ${Config.grid * 3.5}px;
  }
  .name {
    font-size: 54px;
    line-height: 1;
    margin-bottom: ${Config.grid}px;
  }
  .plan {
    font-size: 24px;
    margin-bottom: ${Config.grid * 1.5}px;
  }
  .floor_space {
    font-size: 14px;
    .isAlphabet {
      font-size: 24px;
      padding: 0 ${Config.grid * 1}px;
    }
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

export default VrMap