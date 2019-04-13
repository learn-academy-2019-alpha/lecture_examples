import React from "react"
import PropTypes from "prop-types"
class Bikes extends React.Component {
  render () {
    const{ bikes, current_user } = this.props
    if(current_user){
      var user_id = current_user.id
    }
    return (
      <React.Fragment>
        {bikes.length === 0 &&
          <h2>Loading</h2>
        }
        <ul>
          {bikes.map((bike)=>{
            return(
              <li key={bike.id}>
                {bike.brand} {bike.model} - {bike.model_year}
                {user_id && bike.user_id === user_id &&
                  <button>This is yours</button>
                }
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Bikes
