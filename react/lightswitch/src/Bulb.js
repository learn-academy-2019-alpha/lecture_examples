import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LightOn from './assets/light-on.jpg'
import LightOff from './assets/light-off.jpg'

class Bulb extends Component {
  render() {
    const{ isOn } = this.props
    return(
      <div>
        <h1>Bulb</h1>
        {isOn &&
          <img src={LightOn} />
        }
        {!isOn &&
          <img src={LightOff} />
        }
      </div>
    )
  }
}

export default Bulb
