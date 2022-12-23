import { jsx, css, keyframes } from '@emotion/react'
import Config from '../Config'

function WalkThroughContents(props) {
  const text = {
    node6: {
      lead: "豊かな植栽に彩られた\n風を感じるプロムナード",
      text: "活版所ジョバンニが学校の門を出て来て立ちました。そしてその見えない天の川のずうっと川下に青や橙や、いろいろな宝石が海のようなかたちに進んで行こうああきっと行くよ。",
    },
    node2: {
      lead: "時間と季節の変化を感じる\n家であり、外でもある\n心地よい第三の場所",
      text: "",
    },
    node7: {
      lead: "木漏れ日が迎える\nエントランススペース",
      text: "",
    },
    node19: {
      lead: "高級ホテルをイメージした\nラグジュアリーなロビー",
      text: "",
    },
    node16: {
      lead: "光と風が心地よい\n生活空間を演出します",
      text: "",
    },
    node8: {
      lead: "ちょっと腰を下ろし\n光の変化を楽しめる\nベンチスペース",
      text: "",
    },
    node9: {
      lead: "緩やかにつながり\n拡張されていく\n橋本ⅠとⅡのプロムナード",
      text: "",
    },
    node10: {
      lead: "風と光を呼び込む\n橋本Ⅱの北側部分",
      text: "",
    },
    node3: {
      lead: "大きなアーチが印象的な\n橋本Ⅱのエントランススペース",
      text: "",
    },
    node11: {
      lead: "公園の木漏れ日を思わせる\nプロムナードのベンチスペース",
      text: "",
    },
  }

  const lead = text[props.currentNode] ? text[props.currentNode].lead : ''
  const body = text[props.currentNode] ? text[props.currentNode].text : ''
  const nodeArray = Object.keys(text)
  const nextNodeKey = nodeArray.indexOf(props.currentNode) + 1
  const prevNodeKey = nodeArray.indexOf(props.currentNode) - 1

  const c = ['walkThroughText']
  if (props.isReady) c.push('isReady')

  return (
    <div className={c.join(' ')} css={walkThroughStyle}>
      <h3>{lead}</h3>
      <ul className="navLink">
        <li
          className="back"
          onClick={() => props.nodeChangeHandler(nodeArray[prevNodeKey])}
        >&laquo; BACK</li>
        <li
          className="next"
          onClick={() => props.nodeChangeHandler(nodeArray[nextNodeKey])}
        >NEXT &raquo;</li>
      </ul>
    </div>
  )
}

const buttonAnimation = keyframes`
  0% {
    opacity: .1;
  }
  50% {
    opacity: .9;
  }
  100% {
    opacity: .1;
  }
`;
const walkThroughStyle = css`
  color: #FFF;
  bottom: ${Config.grid * 2 * (-1)}px;
  opacity: 0;
  position: absolute;
  pointer-events: auto;
  right: ${Config.grid * 2}px;
  transition: bottom 850ms ease-out, opacity 500ms;
  transition-delay: 2.8s;
  width: 85%;
  &.isReady {
    bottom: ${Config.grid * 2}px;
    opacity: 1;
  }
  h3 {
    font-size: 24px;
    font-family: fot-tsukumin-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    line-height: 1.4;
    margin: 0 0 ${Config.grid * 1}px;
    text-align: right;
    text-shadow: 0 0 4px rgba(0,0,0,.3);
    white-space: pre;
  }
  .body {
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
    padding: 0 0 0 20%;
    text-align: justify;
    width: 80%;
  }
  .navLink {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 0 0 60%;
    pointer-events: auto;
    width: 40%;
    max-width: 300px;
    li {
      border: 1px solid rgba(255,255,255,.5);
      color: rgba(255,255,255,.9);
      cursor: pointer;
      font-size: 14px;
      font-family: ${Config.font.family};
      font-weight: ${Config.font.weight};
      font-style: ${Config.font.style};
      line-height: 1.5;
      list-style: none;
      margin: 0;
      padding: 2px ${Config.grid * 1}px;
      position: relative;
      z-index: 15;
      transition: all 800ms ease-out;
      &:hover {
        transform: scale(1.1);
        transition: all 250ms ease-out;
      }
    }
  }
  .back {
    text-align: left;
  }
  .next {
    overflow: hidden;
    &::before {
      animation: ${buttonAnimation} 3s ease-out infinite;
      background-color: #C5B394;
      border-radius: 50%;
      content: '';
      filter: blur(20px);
      height: 100px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100px;
      z-index: -1;
    }
  }
`


export default WalkThroughContents