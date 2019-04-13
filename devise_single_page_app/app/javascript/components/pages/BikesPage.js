import React from "react"
import PropTypes from "prop-types"

//data
import { allBikes } from '../data/bikes'

//components
import Bikes from '../Bikes'

class BikesPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      bikes: []
    }
    this.getBikes()
  }

  getBikes = ()=>{
    allBikes()
    .then((bikes)=>{
      this.setState({ bikes })
    })
    .catch((error) => {
      this.setState({
        error
      })
    })
  }

  render () {
    const{ bikes } = this.state
    const{ current_user } = this.props
    return (
      <React.Fragment>
        <h1>Bikes</h1>
        <Bikes bikes={bikes} current_user={current_user} />
      </React.Fragment>
    );
  }
}

export default BikesPage
