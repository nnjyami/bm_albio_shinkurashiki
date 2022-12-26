import { css, jsx } from '@emotion/react'
import Config from '../Config'

function TopText(props) {
  const c = ['topText']
  if (props.isReady) c.push('isReady')
  return (
    <div css={topTextStyle} className={c.join(' ')}>
      <p className="sub-copy">ミサワホームの分譲マンション<br />アルビオ・ガーデンシリーズ</p>
      <p className="sub-copy">JR「新倉敷」駅 徒歩3分</p>
      <p className="font-reimin lead-main">
        新倉敷の
        <ruby>
          <rb>憧</rb>
          <rt>しょう</rt>
        </ruby>
        <ruby>
          <rb>憬</rb>
          <rt>けい</rt>
        </ruby>
      </p>
      <p className="font-reimin lead-sub">あこがれを､超える邸宅</p>
      <p className="link" onClick={() => props.modeChangeHandler('ROOM_TOUR')}>→ ルームツアーを見る</p>
      <p className="link" onClick={() => props.modeChangeHandler('INTERIOR_COLOR_OPTIONS')}>→ オプションを見る</p>
    </div>
  )
}

const topTextStyle = css`
  background-color: rgba(255,255,255,.6);
  backdrop-filter: blur(3px);
  filter: blur(4px);
  left: 0;
  opacity: 0;
  padding: ${Config.grid * 2}px;
  pointer-events: auto;
  position: absolute;
  top: 35%;
  transition: all 1000ms ease-out;
  transition-delay: 1.5s;
  transform: scale(1.4);
  z-index: 1;
  .lead-main,
  .lead-sub {
    opacity: 0;
    transition: all 1000ms ease-out;
    transition-delay: 1.8s;
    transform: scale(1.3);
  }
  .link {
    opacity: 0;
    transition: all 1000ms ease-out;
    transition-delay: 1.8s;
    transform: translateY(80%);
  }
  &.isReady {
    filter: blur(0);
    opacity: 1;
    transform: scale(1);
    .lead-main,
    .lead-sub {
      opacity: 1;
      transform: scale(1);
    }
    .link {
      opacity: 1;
      transform: translateY(0);
    }
  }
  p {
    margin: 0;
    padding: 0;
  }
  .sub-copy {
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: ${Config.grid * 1}px;
  }
  .lead-main {
    font-size: 36px;
    letter-spacing: 0.1em;
    margin: ${Config.grid * 2}px 0 ${Config.grid * 2}px;
    rt {
      font-size: 12px;
      transform: translateY(-4px);
    }
  }
  .lead-sub {
    font-size: 18px;
    margin-bottom: ${Config.grid * 3}px;
  }
  .link {
    border: 1px solid ${Config.color.main};
    border-radius: 16px;
    color: ${Config.color.main};
    display: inline-block;
    cursor: pointer;
    font-size: 13px;
    margin-right: ${Config.grid}px;
    padding: ${Config.grid * 0.5}px ${Config.grid * 1.5}px;
  }
`

export default TopText