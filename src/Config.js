import nodeCoordinate from './config/nodeCoordinate'
import walkThroughPoints from './config/walkThroughPoints'
import treeCoordinate from './config/treeCoordinate'
import interioColorOptions from './config/interioColorOptions'
import panoNodes from './config/panoNodes'
import defaultView from './config/defaultView'

export default {
  grid: 8,
  color: {
    main: "#086845"
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
  // 各オプションごとのnode
  panoNodes,
  defaultView,
  // Map 用のリンク座標
  nodeCoordinate,
  // Walk through のポイント
  walkThroughPoints,
  // Tree 設定
  treeCoordinate,
  // インテリア カラー
  interioColorOptions,
}