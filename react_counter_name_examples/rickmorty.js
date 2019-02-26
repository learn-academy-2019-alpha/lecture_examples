import React, { Component } from 'react';


class Rick extends Component {
  constructor(props){
    super(props)
      this.state = {
        name: "Rick"
    }
}

newName = () => {
    let nextName = this.state.name
    let finalName = nextName === "Rick" ? "Morty" : "Rick"
    this.setState({name: finalName})
}


render() {
    let { name } = this.state

  return (
      <div>
      <h1>Name: {name}</h1>
      <button onClick = {this.newName}>Change Name!</button>
    </div>
  );
}
}


export default Rick
