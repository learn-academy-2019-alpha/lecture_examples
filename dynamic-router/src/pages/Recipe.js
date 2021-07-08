import React, { Component } from 'react'
import recipes from '../store/recipes'

class Recipe extends Component {
  constructor(props){
    super(props)
    const{ match } = props
    this.state = {
      recipes: recipes,
      recipeId: parseInt(match.params.id)
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.setState({recipeId: parseInt(this.props.match.params.id)})
    }
  }
  render() {
    const{ recipeId, recipes } = this.state

    //Pulls recipe from mock data.  In a live app, this would be a fetch
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    return(
      <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.instructions}</p>
      </div>
    )
  }
}

export default Recipe
