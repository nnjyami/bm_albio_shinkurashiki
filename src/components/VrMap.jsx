import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

import mapImage from '../assets/map.jpg'

import '../css/VrMap.css'

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
        css={css}
        style={position}
        onClick={() => props.nodeChangeHandler(v)}></li>
    )
  })
  return (
    <nav className={mapClass} css={mapStyle}>
      <p css={mapTitle}>Map</p>
      <p css={closeBtn} onClick={() => props.toggleMapVisible()}></p>
      <ul css={styles.pointLinkWrap}>
        {points}
      </ul>
      <img className="Map_img" src={mapImage} />
    </nav>
  )
}

const ripple1 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`;
const ripple2 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const styles = {
  pointLinkWrap: {
    height: '100%',
    margin: 0,
    padding: 0,
    position: "absolute",
    width: '100%',
    zIndex: 500,
  },
  pointLink: {
    animation: `${ripple1} 1.5s ease infinite`,
    border: `4px solid ${Config.color.main}`,
    borderRadius: '50%',
    boxShadow: '-2px 0 6px 2px rgba(0,0,0,.4)',
    height: '24px',
    listStyle: 'none',
    position: "absolute",
    width: '24px',
  },
  isCurrent: {
    animation: `${ripple2} 1.5s ease infinite`,
    backgroundColor: `${Config.color.main}`,
  },
}

const mapStyle = css`
  border-left: 1px solid #B19C83;
  box-shadow: -8px 0 10px rgba(0, 0, 0, .3);
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 500;
  pointer-events: auto;
  right: -150%;
  transition: all 850ms;
  &.isShow {
    border-left: 6px solid #B19C83;
    right: 0;
    transition: all 650ms;
  }
`
const mapTitle = css`
  color: #272626;
  font-size: 58px;
  font-family: ${Config.font.family};
  font-weight: ${Config.font.weight};
  font-style: ${Config.font.style};
  left: ${Config.grid * 5}px;
  margin: 0;
  position: absolute;
  text-shadow: 0 0 3px rgba(0,0,0,.2);
  top: ${Config.grid * 2}px;
  transition: left 650ms;
  transition-delay: 300ms;
  .isShow & {
    left: ${Config.grid * (-1.5)}px;
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
    right: ${Config.grid * 1.5}px;
    top: ${Config.grid * 3}px;
    width: ${Config.grid * 3}px;
    z-index: 550;
    &:before,
    &:after {
      background-color: #272626;
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