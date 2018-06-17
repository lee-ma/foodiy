import React from 'react'
import { Text, RecipeInformationCard } from '../components'
import shortenText from '../utils/shortenText'
import axios from 'axios'
import { isEmpty } from 'lodash'
import styled from 'styled-components'
import { colors } from '../theme'

const ScrollToRecipe = styled('div')`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 15px;
  right: 25px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  background-color: ${colors.green};
`

class Recipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {},
      descriptionHidden: true,
      showButton: false,
      maxLength: 100,
      activeImageIndex: 0
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
    const { recipe, descriptionHidden, maxLength, showButton, activeImageIndex } = this.state
    const { images } = recipe
    if (isEmpty(recipe)) return null
    return(
      <div className="container-fluid" style={{ marginTop: "2.5em" }}>
        <div className="row">
          <div className="col-xs-12 col-lg-7 offset-lg-1" style={{ marginBottom: "1em" }}>
            <div style={{
              backgroundImage: `url(${images[activeImageIndex]})`, // TODO: Make it possible to view multiple images
              width: '100%',
              paddingBottom: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0.5em 0 1em 0' }}
            />
            <Text big bold block
              style={{ marginBottom: "0.5em", lineHeight: "1" }}>{recipe.title}</Text>
            <Text grey>{descriptionHidden ? shortenText(recipe.description, maxLength) : recipe.description}</Text>
            {showButton &&
            <Text
              onClick={this.toggleHiddenDescription}
              style={{ cursor: "pointer" }}
              green
              underline>{descriptionHidden ? "Show More" : "Show Less"}</Text>
            }
            {window.innerWidth < 992 && <hr />}
          </div>
          <div className="col-xs-12 col-lg-3">
            <RecipeInformationCard recipe={recipe} />
          </div>
        </div>
        {window.innerWidth < 768 &&
        <a href="#recipe">
          <ScrollToRecipe>
            <i style={{ fontSize: '22px', color: 'white' }} className="fas fa-chevron-down"></i>
          </ScrollToRecipe>
        </a>
        }
      </div>
    )
  }
}

export default Recipe
