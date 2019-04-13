import React from "react"
import PropTypes from "prop-types"
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//Pages
import BikesPage from './pages/BikesPage'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Authenticated</h1>
        <a rel="nofollow" data-method="delete" href="/users/sign_out">Log Out</a>

        <Router>
          <Switch>
            <Route to="/bikes" render={() => (
                <BikesPage {...this.props} />
              )} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
