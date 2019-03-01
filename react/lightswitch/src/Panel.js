import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Bulb from './Bulb'
import Switch from './Switch'

class Panel extends Component {
  constructor(props){
    super(props)
    this.state = {
      lights: [false, true, false]
    }
  }
  toggleSwitch = (index)=>{
    const{ lights } = this.state
    lights[index] = !lights[index]
    this.setState({ lights: lights })
    console.log(lights)
  }

  render() {
    const{ lights } = this.state
    return(
      <div>
        <h1>Panel</h1>
        {lights.map((lightOn, index)=>{
          return(
            <div
              key={index}
              style={{
                border: '1px solid black',
                width: 300,
                float: 'left',
                marginLeft: 20
              }}
            >
              <h2>Light: {index}</h2>
              <Bulb
                isOn={lightOn}
              />
              <Switch
                isOn={lightOn}
                onToggle={this.toggleSwitch}
                index={index}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Panel
