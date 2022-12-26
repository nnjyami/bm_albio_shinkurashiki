import React, { useState } from 'react'

import Config from './Config'

import GlobalStyle from './components/GlobalStyle'

import ContentsNav from './components/ContentsNav'
import InteriorColorNav from './components/InteriorColorNav'
import IntroCover from './components/IntroCover'
import LocalNav from './components/LocalNav'
import Nav from './components/Nav'
import SideText from './components/SideText'
import VrMap from './components/VrMap'
import TopText from './components/TopText'
import RoomTourNav from './components/RoomTourNav'


import './css/normalize.css'
import './css/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNode: null,
      currentViewPoint: '016',
      currentInteriorColor: 0,
      currentRoomType: 'D',
      isReady: false,
      mode: 'TOP',
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
    if (!mode && !Config.modes[mode]) return false
    this.setState({
      mode: mode,
      showContentsNav: false,
    });
    this.updatePinoByMode(mode);
  }

  introAnimation() {
    window.pano.openNext('{node5}')
    window.pano.startAutorotate(-0.24)
    setTimeout(() => {
      window.pano.stopAutorotate()
    }, 1600)
  }

  updatePinoByMode(mode) {
    switch(mode){
      case 'Top':
        this.viewPointChangeHandler('016')
        break;
      
      case 'ROOM_TOUR':
        this.viewPointChangeHandler('012')
        break;
      
      case 'INTERIOR_COLOR_OPTIONS':
        this.viewPointChangeHandler('013')
        break;
    }
  }

  nodeChangeHandler(node, viewPoint = this.state.currentViewPoint) {
    console.log('nodeChangeHandler -- ')
    if (!node) return false
    window.pano.openNext('{' + node + '}')
    const view = Config.defaultView[viewPoint]
    if(window.pano.getPan() != view.pan){
      window.pano.changePan(window.pano.getPan() + view.pan)
      // window.pano.setPan(view.pan)
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
      viewPoint
    )
    this.setState({
      currentViewPoint: viewPoint,
      showMap: false,
    })
  }

  colorChangeHandler(colorKey){
    console.log(this.state.currentViewPoint, colorKey)
    this.nodeChangeHandler(
      'node' + Config.panoNodes[this.state.currentViewPoint][colorKey],
      this.state.currentViewPoint
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
        <GlobalStyle />
        <IntroCover isReady={this.state.isReady} />
        <Nav
          isReady={this.state.isReady}
          showContentsNav={this.state.showContentsNav}
          toggleMapVisible={this.toggleMapVisible.bind(this)}
          toggleContentsNavVisible={this.toggleContentsNavVisible.bind(this)}
        />
        {this.state.mode === 'INTERIOR_COLOR_OPTIONS' &&
          <InteriorColorNav
            currentNode={this.state.currentNode}
            currentViewPoint={this.state.currentViewPoint}
            currentInteriorColor={this.state.currentInteriorColor}
            isReady={this.state.isReady}
            colorChangeHandler={this.colorChangeHandler.bind(this)}
            nodeArray={Config.panoNodes[this.state.currentViewPoint]}
          />
        }
        {this.state.mode === 'TOP' && <TopText
          isReady={this.state.isReady}
          modeChangeHandler={this.modeChangeHandler.bind(this)}
          />
        }
        {this.state.mode !== 'TOP' && <SideText
            mode={Config.modes[this.state.mode].title}
            roomType={Config.roomTypes[this.state.currentRoomType].name}
            color={Config.interioColorOptions.find(
                color => color.key === this.state.currentInteriorColor).name}
            viewPoint={Config.viewPoints[this.state.currentViewPoint].name}
            isReady={this.state.isReady}
            showContentsNav={this.state.showContentsNav}
          />
        }
        {this.state.mode === 'ROOM_TOUR' && <RoomTourNav
          currentViewPoint={this.state.currentViewPoint}
          roomName={Config.viewPoints[this.state.currentViewPoint].name}
          viewPointChangeHandler={this.viewPointChangeHandler.bind(this)}
          />
        }
        <ContentsNav
          currentMode={this.state.mode}
          currentRoomType={this.state.currentRoomType}
          showContentsNav={this.state.showContentsNav}
          toggleContentsNavVisible={this.toggleContentsNavVisible.bind(this)}
          modeChangeHandler={this.modeChangeHandler.bind(this)}
        />
        <VrMap
          currentNode={this.state.currentNode}
          currentViewPoint={this.state.currentViewPoint}
          currentRoomType={this.state.currentRoomType}
          viewPointChangeHandler={this.viewPointChangeHandler.bind(this)}
          showMap={this.state.showMap}
          toggleMapVisible={this.toggleMapVisible.bind(this)}
        />
      </div>
    )
  }
}

export default App
