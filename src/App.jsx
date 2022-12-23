import React, { useState } from 'react'

import Config from './Config'

import { MODE } from './config/modeConfig'

import ContentsNav from './components/ContentsNav'
import InteriorColorNav from './components/InteriorColorNav'
import IntroCover from './components/IntroCover'
import LocalNav from './components/LocalNav'
import Nav from './components/Nav'
import SideText from './components/SideText'
import VrMap from './components/VrMap'
import WalkThroughContents from './components/WalkThroughContents'

import './css/normalize.css'
import './css/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNode: null,
      currentViewPoint: '012',
      currentInteriorColor: 0,
      isReady: false,
      mode: MODE.INTERIOR_COLOR,
      nodes: [],
      pano: {},
      showMap: false,
      showContentsNav: false,
    }
  }

  componentDidMount() {
    this.checkPanoIsLoaded()
  }

  checkPanoIsLoaded() {
    const isLoaded = window.pano.isLoaded
    if (!isLoaded) {
      setTimeout(() => {
        this.checkPanoIsLoaded()
      }, 200)
    } else {
      window.pano.setTransition({
        type: "diptocolor",
        dipcolor: "0xffffff",
        before: 0,
        after: 0,
        transitiontime: 1.5,
      })
      this.introAnimation()
      this.setState({
        isReady: true,
        nodes: window.pano.getNodeIds(),
        currentNode: window.pano.getCurrentNode()
      })
    }
  }

  modeChangeHandler(mode) {
    if (!mode && !MODE[mode]) return false
    this.setState({
      mode: MODE[mode],
      showContentsNav: !this.state.showContentsNav,
    });
  }

  introAnimation() {
    window.pano.openNext('{node22}')
    window.pano.startAutorotate(-0.15)
    setTimeout(() => {
      window.pano.stopAutorotate()
    }, 1600)
  }

  nodeChangeHandler(node, isChangeViewpoint = false) {
    console.log('nodeChangeHandler -- ')
    if (!node) return false
    window.pano.openNext('{' + node + '}')
    const view = Config.defaultView[this.state.currentViewPoint]
    console.log(view, window.pano.getPan())
    if(window.pano.getPan() != view.pan){
      window.pano.changePan(window.pano.getPan() + view.pan)
      window.pano.setFov(view.fov)
    }
    
    // if(isChangeViewpoint){
      window.pano.startAutorotate(0.15)
      setTimeout(() => {
        window.pano.stopAutorotate()
      }, 1200)
    // }
    this.setState({
      currentNode: node,
    })
  }

  viewPointChangeHandler(viewPoint){
    if (!viewPoint) return false
    this.nodeChangeHandler(
      'node' + Config.panoNodes[viewPoint][this.state.currentInteriorColor],
      true
    )
    this.setState({
      currentViewPoint: viewPoint,
      showMap: !this.state.showMap,
    })
  }

  colorChangeHandler(colorKey){
    console.log(this.state.currentViewPoint, colorKey)
    this.nodeChangeHandler(
      'node' + Config.panoNodes[this.state.currentViewPoint][colorKey],
      false
    )
    this.setState({
      currentInteriorColor: colorKey
    })
  }

  toggleMapVisible() {
    this.setState({
      showMap: !this.state.showMap,
      showContentsNav: false,
    })
  }

  toggleContentsNavVisible() {
    this.checkPano()
    this.setState({
      showMap: false,
      showContentsNav: !this.state.showContentsNav,
    })
  }

  /**
   * Pano2VR側の座標を調べる
   */
  checkPano() {
    const pan = window.pano.getPan()
    const tilt = window.pano.getTilt()
    const fov = window.pano.getFov()
    console.log({
      ptf: [
        pan, tilt, fov
      ],
      pan,
      tilt,
      fov
    })
  }

  render() {
    return (
      <div className="App">
        <div className="vr"></div>
        <IntroCover isReady={this.state.isReady} />
        <SideText
          currentMode={this.state.mode}
          isReady={this.state.isReady}
          showContentsNav={this.state.showContentsNav}
        />
        <Nav
          isReady={this.state.isReady}
          showContentsNav={this.state.showContentsNav}
          toggleMapVisible={this.toggleMapVisible.bind(this)}
          toggleContentsNavVisible={this.toggleContentsNavVisible.bind(this)}
        />
        {this.state.mode === MODE.INTERIOR_COLOR &&
          <InteriorColorNav
            currentNode={this.state.currentNode}
            currentViewPoint={this.state.currentViewPoint}
            currentInteriorColor={this.state.currentInteriorColor}
            isReady={this.state.isReady}
            colorChangeHandler={this.colorChangeHandler.bind(this)}
            nodeArray={Config.panoNodes[this.state.currentViewPoint]}
          />
        }
        {this.state.mode === MODE.WALK_THROUGH &&
          <WalkThroughContents
            currentNode={this.state.currentNode}
            isReady={this.state.isReady}
            nodeChangeHandler={this.nodeChangeHandler.bind(this)}
          />
        }
        <ContentsNav
          showContentsNav={this.state.showContentsNav}
          toggleContentsNavVisible={this.toggleContentsNavVisible.bind(this)}
          modeChangeHandler={this.modeChangeHandler.bind(this)}
        />
        <VrMap
          currentNode={this.state.currentNode}
          viewPointChangeHandler={this.viewPointChangeHandler.bind(this)}
          showMap={this.state.showMap}
          toggleMapVisible={this.toggleMapVisible.bind(this)}
        />
      </div>
    )
  }
}

export default App
