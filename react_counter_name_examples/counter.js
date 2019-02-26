import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
    }
}



addOne = () => {
    let newCount = this.state.count + 1
    this.setState({ count: newCount })
}

subOne = () => {
    let lowCount = this.state.count - 1
    if(lowCount < 1){
        lowCount = 0
    }
    this.setState({count: lowCount})
}



  render() {
      let { count } = this.state

    return (
        <div>
        <h1>count: {count}</h1>
        <button onClick = {this.addOne}>Add One!</button>
        <button onClick = {this.subOne}>Subtract One!</button>
        </div>

    );
  }
}

//How can we show multiple counters on a page?
//what if we wanted to have an add 1 and subtract 1 button?
//Example of ternary Rick and Morty (make a new component)

export default Counter;
