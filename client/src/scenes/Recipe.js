import React from 'react'
import { Text, RecipeInformationCard } from '../components'
import shortenText from '../utils/shortenText'
import axios from 'axios'
import { isEmpty } from 'lodash'

class Recipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {},
      descriptionHidden: true,
      showButton: false,
      maxLength: 100
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    axios.get(`/api/recipes/${id}`)
      .then(res => {
        this.checkShowButton(res.data.description)
        this.setState({
          recipe: res.data
        })
      })
  }

  toggleHiddenDescription = () => {
    this.state.descriptionHidden
      ? this.setState({ descriptionHidden: false })
      : this.setState({ descriptionHidden: true })
  }

  checkShowButton(desc) {
    if (desc.length > this.state.maxLength) {
      this.setState({ showButton: true })
    }
  }

  render() {
    const { recipe, descriptionHidden, maxLength, showButton } = this.state
    const { images } = recipe
    if (isEmpty(recipe)) return null
    return(
      <div className="container-fluid" style={{ marginTop: "2.5em" }}>
        <div className="row">
          <div className="col-xs-12 col-md-8" style={{ marginBottom: "1em" }}>
            <div style={{
              backgroundImage: `url(${images[0]})`, // TODO: Make it possible to view multiple images
              width: '100%',
              paddingBottom: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0' }}
            />
            <Text big bold>{recipe.title}</Text>
            <Text grey>{descriptionHidden ? shortenText(recipe.description, maxLength) : recipe.description}</Text>
            {showButton &&
            <Text
              onClick={this.toggleHiddenDescription}
              style={{ cursor: "pointer" }}
              green
              underline>{descriptionHidden ? "Show More" : "Show Less"}</Text>
            }
            {window.innerWidth < 770 && <hr />}
          </div>
          <div className="col-xs-12 col-md-4">
            <RecipeInformationCard recipe={recipe} />
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe
