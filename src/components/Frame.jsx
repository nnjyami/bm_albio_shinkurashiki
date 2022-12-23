import { jsx } from '@emotion/react'
import Config from '../Config'

function Frame(props) {
  const type = ["top", "right", "bottom", "left"]
  const frames = type.map(value => {
    const c = `frame_${value}`
    const cssStyleArray = [styles[value], styles.frame]
    if (value === 'left') {
      const key = props.showContentsNav ? `${value}-isOpen` : `${value}-isClose`
      cssStyleArray.push(styles[key])
    }
    return (
      <div className={c} key={value} css={cssStyleArray}></div>
    )
  })

  return (
    <div className="Frame" css={styles.frameWrap}>
      {frames}
    </div>
  )
}

const styles = {
  frameWrap: {
    height: "100%",
    left: 0,
    PointerEvent: "none",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 20
  },
  frame: {
    backgroundColor: "rgba(255, 255, 255, .2)",
    backdropFilter: "blur(4px)",
    position: "absolute",
  },
  top: {
    height: `${Config.grid}px`,
    left: 0,
    top: 0,
    width: "100%",
  },
  right: {
    height: `calc(100% - ${Config.grid * 2}px)`,
    right: 0,
    top: `${Config.grid}px`,
    width: `${Config.grid}px`,
  },
  bottom: {
    height: `${Config.grid}px`,
    left: 0,
    bottom: 0,
    width: "100%",
  },
  left: {
    height: `calc(100% - ${Config.grid * 2}px)`,
    left: 0,
    top: `${Config.grid}px`,
    transition: "width 300ms",
  },
  'left-isOpen': {
    width: `${Config.grid * 35}px`,
  },
  'left-isClose': {
    width: `${Config.grid}px`,
  },
}



export default Frame