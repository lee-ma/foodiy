import React from 'react'
import { Text, RecipeInformationCard, AvatarImage, CommentBox, Slider } from 'components'
import StickyBox from "react-sticky-box"
import { fetchRecipe, getRecipeById } from 'actions'
import { withRouter } from 'react-router-dom'
import shortenText from 'utils/shortenText'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import styled from 'styled-components'
import { colors } from 'theme'

const ScrollToRecipeButton = styled('div')`
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
      descriptionHidden: true,
      showButton: false,
      maxLength: 100,
      activeImageIndex: 0
    }
  }

  componentWillReceiveProps = props => {
    !isEmpty(props.recipe) && this.checkShowButton(props.recipe.description)
  }

  componentWillMount() {
    const { id } = this.props.match.params

    this.props.fetchRecipe(id)
  }

  toggleHiddenDescription = () => {
    this.state.descriptionHidden
      ? this.setState({ descriptionHidden: false })
      : this.setState({ descriptionHidden: true })
  }

  checkShowButton = desc => {
    if (desc && (desc.length > this.state.maxLength)) {
      this.setState({ showButton: true })
    }
  }

  render() {
    const { descriptionHidden, maxLength, showButton } = this.state
    const { recipe } = this.props
    const { images } = recipe
    if (isEmpty(recipe)) return null
    return(
      <div className="container-fluid" style={{ marginTop: "2.5em" }}>
        <div className="row">
          <div className="col-xs-12 col-lg-7 offset-lg-1" style={{ marginBottom: "1em" }}>
            <div style={{ width: '100%', margin:'0.5em 0 1em 0' }}>
              <Slider images={images}/>
            </div>
            <Text big semiBold block
              style={{ marginBottom: "0.2em", lineHeight: "1" }}>{recipe.title}</Text>
            <div style={{ display: "flex", justifyContent: "left", verticalAlign: "center", marginBottom: "1.3em" }}>
              <AvatarImage user={recipe.user}/>
              <Text style={{ marginLeft: "0.5em", marginTop: "0.25em" }} semiBold>{`${recipe.user.firstName} ${recipe.user.lastName}`}</Text>
            </div>
            <Text greyDark>{descriptionHidden ? shortenText(recipe.description, maxLength) : recipe.description}</Text>
            {showButton &&
            <Text
              onClick={this.toggleHiddenDescription}
              style={{ cursor: "pointer", display: "inline" }}
              green
              underline>{descriptionHidden ? "Show More" : "Show Less"}</Text>
            }
            <div className="margin-vertical-lg" style={{ width: '100%' }}>
              <Text medium semiBold>
                Leave a Comment
              </Text>
              <CommentBox/>
            </div>
            {window.innerWidth < 992 && <hr />}
          </div>
          <div className="col-xs-12 col-lg-3">
            <RecipeInformationCard recipe={recipe} />
          </div>
        </div>
        {window.innerWidth < 768 &&
        <a href="#recipe">
          <ScrollToRecipeButton>
            <i style={{ fontSize: '22px', color: 'white' }} className="fas fa-chevron-down"></i>
          </ScrollToRecipeButton>
        </a>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeById(state, ownProps.match.params.id)
})

export default withRouter(connect(mapStateToProps, { fetchRecipe })(Recipe))
