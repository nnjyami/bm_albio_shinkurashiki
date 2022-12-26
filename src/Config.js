import nodeCoordinate from './config/nodeCoordinate'
import walkThroughPoints from './config/walkThroughPoints'
import treeCoordinate from './config/treeCoordinate'
import interioColorOptions from './config/interioColorOptions'
import viewPoints from './config/viewPoints'
import panoNodes from './config/panoNodes'
import defaultView from './config/defaultView'
import roomTypes from './config/roomTypes'
import roomTour from './config/roomTour'
import modes from './config/modes'

export default {
  grid: 8,
  color: {
    main: "#086845",
    mainBackground: "rgba(8, 104, 69, .6)",
  },
  font: {
    family: 'classico-urw, sans-serif',
    weight: 400,
    style: 'normal',
  },
  mapSize: {
    w: 760,
    h: 1136,
  },
  modes,
  // 各オプションごとのnode
  viewPoints,
  panoNodes,
  defaultView,
  roomTypes,
  roomTour,
  // Map 用のリンク座標
  nodeCoordinate,
  // Walk through のポイント
  walkThroughPoints,
  // Tree 設定
  treeCoordinate,
  // インテリア カラー
  interioColorOptions,
}