import React, { Component } from 'react'
import { Text } from './index'
import styled from 'styled-components'
import { colors, fonts } from '../theme'
import { isEmpty } from 'lodash'

const StyledCard = styled("div")`
  /* border: 1px solid;
  border-color: ${colors.greyLight}; */
  min-height: 70vh;
  overflow: visible;
`

const TabButton = styled("div")`
  flex: 1;
  cursor: pointer;
  text-align: center;
  padding-bottom: 0.3em;
  transition: 0.1s;
  font-family: ${fonts.sansSerif};
  font-size: 18px;
`

const Tabs = ({ toggle, selected }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5em" }}>
      <TabButton
        style={{ borderBottom: selected === "ingredients" ? `2px solid ${colors.green}` : `1px solid ${colors.grey}` }}
        onClick={toggle}>Ingredients</TabButton>
      <TabButton
        style={{ borderBottom: selected === "directions" ? `2px solid ${colors.green}` : `1px solid ${colors.grey}` }}
        onClick={toggle}>Directions</TabButton>
    </div>
  )
}

class RecipeInformationCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: "ingredients"
    }
  }

  toggleToIngredients = () => {
    this.setState({ selectedTab: "ingredients" })
  }

  toggleToDirections = () => {
    this.setState({ selectedTab: "directions" })
  }

  renderIngredients(ingredients) {
    return ingredients.map((ingredient, index) => {
      return (
        <li>
          <Text style={{ marginBottom: "0.1em" }} block key={index}>{ingredient}</Text>
        </li>
      )
    })
  }

  renderDirections(directions) {
    return directions.map((direction, index) => {
      return (
        <li style={{ marginBottom: "0.75em", lineHeight: "1.35" }} key={index}>
          <Text>{direction}</Text>
        </li>
      )
    })
  }

  render() {
    const { recipe } = this.props
    const { selectedTab } = this.state

    if (isEmpty(recipe)) return null

    if (selectedTab === "ingredients") {
      return (
        <StyledCard>
          <Tabs toggle={this.toggleToDirections} selected="ingredients"/>
          <Text black bold medium
            style={{ marginBottom: '0.5em' }}>
                Ingredients
          </Text>
          <ul>
            {this.renderIngredients(recipe.ingredients)}
          </ul>
        </StyledCard>
      )
    }

    return (
      <StyledCard>
        <Tabs toggle={this.toggleToIngredients} selected="directions"/>
        <Text black bold medium
          style={{ marginBottom: '0.5em' }}>
                Directions
        </Text>
        <ol>
          {this.renderDirections(recipe.steps)}
        </ol>
      </StyledCard>
    )
  }
}

export default RecipeInformationCard