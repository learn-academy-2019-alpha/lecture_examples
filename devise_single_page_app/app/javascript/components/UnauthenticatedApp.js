import React from "react"
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//Pages
import BikesPage from './pages/BikesPage'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Unauthenticated</h1>
        <a href="/users/sign_in">Login</a>
        <Router>
          <Switch>
            <Route to="/bikes" render={ props => (
                <BikesPage {...props} />
              )} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
