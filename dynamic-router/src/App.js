import React, { Component } from 'react';
import{
  Link,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import recipes from './store/recipes'

import Home from './pages/Home'
import Recipe from './pages/Recipe'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: recipes
    }
  }
  render() {
    const{ recipes } = this.state
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              {recipes.map((recipe)=>{
                return(
                  <li key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></li>
                )
              })}
            </ul>

            <Switch>
              <Route path="/recipes/:id" component={Recipe} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
