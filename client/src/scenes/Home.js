import React, { Component } from "react"
import { Text, RecipeCard } from "components"
import { withRouter } from "react-router-dom"
import _ from "lodash"
import { connect } from "react-redux"
import { fetchRecipes } from "actions"
import queryString from "query-string"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userSearched: false,
      queryParams: {}
    }
  }
  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search)

    this.setState({ userSearched: !_.isEmpty(queryParams), queryParams })
    this.props.fetchRecipes(queryParams)
  }

  renderRecipeCards = () => {
    if (!this.props.recipes) return null
    else if (this.props.recipes[0] === "No Results") return <Text>No Results Found :(</Text>

    return this.props.recipes.map(
      (recipe, index) => {
        return (
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
    const { userSearched, queryParams } = this.state
    return (
      <div className="container-fluid">
        <div className="row fadein">
          <div className="col-xs-12 col-sm-10 offset-sm-1">
            {userSearched &&
              <Text big black>
                Search results for "{queryParams.q || queryParams.tag}"
              </Text>
            }
            {!userSearched && <Text big black>All Recipes</Text>}
            <div className="row" style={{ marginTop: "1.5em" }}>
              <div
                className="flexbox grid-cols"
                style={{
                  padding: "0",
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

export default withRouter(connect(mapStateToProps, { fetchRecipes })(Home))
