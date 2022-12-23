import React, { useState } from 'react'

import { MODE } from './config/modeConfig'

import IntroCover from './components/IntroCover'
import SideText from './components/SideText'
import Nav from './components/Nav'
import LocalNav from './components/LocalNav'
import ContentsNav from './components/ContentsNav'
import VrMap from './components/VrMap'
import WalkThroughContents from './components/WalkThroughContents'
import TreeNav from './components/TreeNav'

import './css/normalize.css'
import './css/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNode: null,
      isReady: false,
      mode: MODE.WALK_THROUGH,
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
    window.pano.openNext('{node6}')
    window.pano.setDefaultView(164.5, 0, 90)
    window.pano.startAutorotate(-0.15)
    setTimeout(() => {
      window.pano.stopAutorotate()
    }, 1600)
  }

  nodeChangeHandler(node) {
    console.log('nodeChangeHandler -- ')
    if (!node) return false
    window.pano.openNext('{' + node + '}')
    window.pano.startAutorotate(0.15)
    setTimeout(() => {
      window.pano.stopAutorotate()
    }, 1200)
    this.setState({
      currentNode: node
    });
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
        {this.state.mode === MODE.WALK_THROUGH &&
          <WalkThroughContents
            currentNode={this.state.currentNode}
            isReady={this.state.isReady}
            nodeChangeHandler={this.nodeChangeHandler.bind(this)}
          />
        }
        {this.state.mode === MODE.TIME_SEASONS &&
          <LocalNav
            currentNode={this.state.currentNode}
            nodeChangeHandler={this.nodeChangeHandler.bind(this)}
          />
        }
        {this.state.mode === MODE.TREES_PLANTS &&
          <TreeNav
            currentNode={this.state.currentNode}
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
          nodeChangeHandler={this.nodeChangeHandler.bind(this)}
          showMap={this.state.showMap}
          toggleMapVisible={this.toggleMapVisible.bind(this)}
        />
      </div>
    )
  }
}

export default App
