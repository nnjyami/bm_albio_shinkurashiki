import * as THREE from "three"
import React, { useRef, useState, useMemo } from "react"

import { pano2vrPlayer } from '../vr/pano2vr_player'
import { pano2vrSkin } from '../vr/skin'

class VrPlayer extends React.Component {

  constructor() {
    const pano = new pano2vrPlayer("vrContainer")
    const skin = new pano2vrSkin(pano)
  }

  componentDidMount() {
    pano.readConfigUrlAsync("./pano.xml");
  }

  render() {
    return (
      <div className="VrPlayer">
        <div className="vrContainer"></div>
      </div>
    )
  }
}

export default VrPlayer