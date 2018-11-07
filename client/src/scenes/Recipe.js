import React from "react"
import {
  Text,
  RecipeInformationCard,
  AvatarImage,
  Comment,
  CommentBox,
  Slider
} from "components"
import { fetchRecipe, getRecipeById } from "actions"
import { withRouter } from "react-router-dom"
import { shortenText } from "utils"
import _ from "lodash"
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import styled from "styled-components"

const Tag = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.color};
  border-radius: 2px;
  padding: 2px 5px;
  margin: 5px 5px 5px 0;
  & > span {
    color: ${props => props.color} !important;
  }
`

const CircleButton = styled("div")`
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
  background-color: ${({ theme }) => theme.colors.green};
`

const ScrollToRecipeButton = ({ atBottom }) => {
  return <div>
    {atBottom && <CircleButton onClick={() => window.scrollTo(0, 0)}>
      <i
        style={{ fontSize: "22px", color: "white" }}
        className="fas fa-chevron-up"
      />
    </CircleButton>}
    {!atBottom && <a href="#recipe">
      <CircleButton>
        <i
          style={{ fontSize: "22px", color: "white" }}
          className="fas fa-chevron-down"
        />
      </CircleButton>
    </a>
    }
  </div>
}

class Recipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      descriptionHidden: true,
      showButton: false,
      maxLength: 100,
      atBottom: false
    }
  }

  /* LIFECYCLE METHODS */
  componentWillReceiveProps = props => {
    !isEmpty(props.recipe) && this.checkShowButton(props.recipe.description)
  }

  componentWillMount() {
    const { id } = this.props.match.params

    if (_.isEmpty(this.props.recipe)) this.props.fetchRecipe(id)
    else this.checkShowButton(this.props.recipe.description)
  }

  componentDidMount() {
    window.addEventListener("scroll", _.debounce(this.handleScroll, 100))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  /* METHODS FOR SCROLLING */
  handleScroll = () => {
    const windowHeight = window.innerHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset

    // Say that we are at the bottom
    if (windowBottom >= docHeight) this.setState({ atBottom: true })
    else {
      // Set that we are not at the bottom if we previously had been
      this.state.atBottom && this.setState({ atBottom: false })
    }
  }

  /* METHODS FOR DESCRIPTION */
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

  /* METHODS FOR COMMENTS */
  renderComments = () => {
    const { comments } = this.props.recipe
    return comments.slice(0).reverse().map((comment, index) => (
      <Comment comment={comment} key={index} />
    ))
  }

  /* METHODS FOR TAGS */
  renderTags = () => {
    const { tags } = this.props.recipe
    return tags.map((tag, index) => (
      <Tag key={index} color={tag.color}>
        <Text green small>{tag.name}</Text>
      </Tag>
    ))
  }

  render() {
    const {
      descriptionHidden,
      maxLength,
      showButton,
      atBottom
    } = this.state
    const { recipe } = this.props
    const { images } = recipe
    if (isEmpty(recipe)) return null
    return (
      <div className="container-fluid" style={{ marginTop: "2.5em" }}>
        <div className="row">
          <div className="col-xs-12 col-lg-7 offset-lg-1" style={{ marginBottom: "1em" }}>
            <div style={{ width: "100%", margin: "0.5em 0 1em 0" }}>
              <Slider images={images} />
            </div>
            <Text big semiBold block
              style={{ marginBottom: "0.2em", lineHeight: "1" }}>{recipe.title}</Text>
            <div style={{ display: "flex", justifyContent: "left", verticalAlign: "center", marginBottom: "1.3em" }}>
              <AvatarImage user={recipe.user} />
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
            <div className="f-aic f-jcfs" style={{ marginTop: 10 }}>
              {this.renderTags()}
            </div>
            <div className="margin-vertical-lg" style={{ width: "100%" }}>
              <Text medium semiBold>
                Leave a Comment
              </Text>
              <CommentBox style={{ marginBottom: 15 }} />
              {this.renderComments()}
            </div>
            {window.innerWidth < 992 && <hr />}
          </div>
          <div className="col-xs-12 col-lg-3">
            <RecipeInformationCard recipe={recipe} />
          </div>
        </div>
        {window.innerWidth < 768 &&
          <ScrollToRecipeButton atBottom={atBottom} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeById(state, ownProps.match.params.id)
})

export default withRouter(connect(mapStateToProps, { fetchRecipe })(Recipe))
