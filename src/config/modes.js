export default {
  ALBIO_GARDEN: {
    title: 'ALBIO GARDEN',
    description: 'MISAWAの分譲マンション/アルビオ・ガーデン',
    isSubContents: false,
  },
  CONCEPT: {
    title: 'Concept',
    description: 'コンセプト',
    isSubContents: false,
  },
  ROOM_PLAN: {
    title: 'Room Plan',
    description: '4種類のルームプラン',
    isSubContents: false,
  },
  ROOM_TOUR: {
    title: 'Room Tour',
    description: 'ルームツアー',
    isSubContents: true,
    parent: 'ROOM_PLAN'
  },
  INTERIOR_COLOR_OPTIONS: {
    title: 'Color Options',
    description: '選べるカラーオプション',
    isSubContents: true,
    parent: 'ROOM_PLAN'
  },
  FACILITIES: {
    title: 'Facilities',
    description: '設備',
    isSubContents: true,
    parent: 'ROOM_PLAN'
  },
  LOCATION: {
    title: 'Location',
    description: 'ロケーション',
    isSubContents: false,
  },
}