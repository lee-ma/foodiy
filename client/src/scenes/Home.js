import React, { Component } from 'react'
import { Text, RecipeCard } from '../components'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions'

class Home extends Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }
  renderRecipeCards = () => {
    if (!this.props.recipes) return null

    return this.props.recipes.map(
      (recipe, index) => {
        return(
          <RecipeCard
            key={index}
            imgSrc={recipe.images[0]}
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
            href={`/recipes/${recipe._id}`}
          />
        )
      }
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row fadein">
          <div className="col-xs-12 col-sm-10 offset-sm-1">
            <Text big black>All Recipes</Text>
            <div className="row" style={{ marginTop: "1.5em" }}>
              <div
                className="flexbox"
                style={{
                  display: 'flex',
                  minHeight: 'wrap-content',
                  flexWrap: 'wrap',
                  padding: '0.5em' }}>
                {this.renderRecipeCards()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { fetchRecipes })(Home)
