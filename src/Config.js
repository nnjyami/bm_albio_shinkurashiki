import nodeCoordinate from './config/nodeCoordinate'
import walkThroughPoints from './config/walkThroughPoints'
import treeCoordinate from './config/treeCoordinate'

export default {
  grid: 8,
  color: {
    main: "#B19C83"
  },
  font: {
    family: 'classico-urw, sans-serif',
    weight: 400,
    style: 'normal',
  },
  mapSize: {
    w: 182,
    h: 838,
  },
  // Map 用のリンク座標
  nodeCoordinate,
  // Walk through のポイント
  walkThroughPoints,
  // Tree 設定
  treeCoordinate,
}