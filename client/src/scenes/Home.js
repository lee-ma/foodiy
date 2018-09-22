import React, { Component } from 'react'
import { Text, RecipeCard } from 'components'
import { connect } from 'react-redux'
import { fetchRecipes } from 'actions'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userSearched: false,
      searchTerm: ""
    }
  }
  componentDidMount() {
    if (this.props.location) {
      const { search } = this.props.location
      const query = search.substring(
        search.lastIndexOf('q=') + 2,
        search.length
      )
      if (query.length === 0) this.props.fetchRecipes()
      else {
        this.setState({ userSearched: true, searchTerm: query })
        this.props.fetchRecipes(query)
      }
    }
    else {
      this.props.fetchRecipes()
    }
  }
  renderRecipeCards = () => {
    if (!this.props.recipes) return null
    else if (this.props.recipes[0] === "No Results") return <Text>No Results Found :(</Text>

    return this.props.recipes.map(
      (recipe, index) => {
        return(
          <RecipeCard
            key={index}
            imgSrc={recipe.images[0]}
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
            href={`/recipes/${recipe.id}`}
          />
        )
      }
    )
  }

  render() {
    const { userSearched, searchTerm } = this.state
    return (
      <div className="container-fluid">
        <div className="row fadein">
          <div className="col-xs-12 col-sm-10 offset-sm-1">
            {userSearched && <Text big black>Search results for "{searchTerm}"</Text>}
            {!userSearched && <Text big black>All Recipes</Text>}
            <div className="row" style={{ marginTop: "1.5em" }}>
              <div
                className="flexbox grid-cols"
                style={{
                  padding: '0',
                  display: "grid",
                  justifyContent: "center"
                }}>
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
