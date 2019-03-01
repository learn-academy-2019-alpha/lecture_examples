import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SwitchOff from './assets/switch-off.jpg'
import SwitchOn from './assets/switch-on.jpg'

class Switch extends Component {
  localHandleToggle = ()=>{
    const{ index, onToggle } = this.props
    onToggle(index)
  }
  render() {
    const{ isOn } = this.props
    return(
      <div
        onClick={this.localHandleToggle}
      >
        <h1>Switch</h1>
        {!isOn &&
          <img src={SwitchOff} />
        }
        {isOn &&
          <img src={SwitchOn} />
        }
      </div>
    )
  }
}

export default Switch
