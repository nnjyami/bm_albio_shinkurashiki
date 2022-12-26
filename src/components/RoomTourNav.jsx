import { css, jsx } from '@emotion/react'
import Config from '../Config'

function RoomTourNav(props) {
  const c = ['RoomTourNav']
  if (props.isReady) c.push('isReady')

  const currentIndex = Config.roomTour.findIndex(i => i === props.currentViewPoint)
  const maxIndex = Config.roomTour.length - 1
  const prev = currentIndex - 1 < 0 ? maxIndex : currentIndex - 1
  const next = currentIndex + 1 > maxIndex ? 0 : currentIndex + 1

  return (
    <div css={RoomTourNavStyle} className={c.join(' ')}>
      <ul className="roomNav">
        <li className="prev" onClick={() => props.viewPointChangeHandler(Config.roomTour[prev])}>← Prev</li>
        <li className="roomName font-reimin">{props.roomName}</li>
        <li className="next" onClick={() => props.viewPointChangeHandler(Config.roomTour[next])}>Next →</li>
      </ul>
    </div>
  )
}

const RoomTourNavStyle = css`
  background: linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.7));
  bottom: 0;
  padding: ${Config.grid * 2}px 0 ${Config.grid * 2}px;
  position: absolute;
  right: 0;
  width: 100%;
  .roomName {
    // background-color: rgba(255,255,255,.75);
    // backdrop-filter: blur(3px);
  }
  .roomNav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
    width: calc(100% - ${Config.grid * 1.5 * 2}px);
    li {
      color: #FFF;
      list-style: none;
      padding: 0 ${Config.grid}px 0;
    }
    .prev,
    .next {
      border: 1px solid rgba(255,255,255,.5);
      border-radius: 8px;
      color: #FFF;
      font-size: 11px;
      padding: ${Config.grid * 0.5}px;
      pointer-events: auto;
    }
  }
`

export default RoomTourNav