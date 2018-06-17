import React, { Component } from 'react'
import { Text } from './index'
import styled from 'styled-components'
import { colors, fonts } from '../theme'
import { isEmpty } from 'lodash'

const StyledCard = styled("div")`
  min-height: 70vh;
  overflow: visible;
`

const TabButton = styled("div")`
  flex: 1;
  cursor: pointer;
  text-align: center;
  padding-bottom: 0.3em;
  padding-top: 0.3em;
  transition: 0.2s;
  font-family: ${fonts.sansSerif};
  font-size: 22px;
  font-weight: 600;
  color: ${colors.black};
`

const Tabs = ({ toggleToDirections, toggleToIngredients, selected }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5em" }}>
      <TabButton
        style={{
          borderLeft: selected === "ingredients" ? `5px solid ${colors.green}` : `2px solid ${colors.grey}`
        }}
        onClick={toggleToIngredients}>Ingredients</TabButton>
      <TabButton
        style={{
          borderRight: selected === "directions" ? `5px solid ${colors.green}` : `2px solid ${colors.grey}`
        }}
        onClick={toggleToDirections}>Directions</TabButton>
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
          <Tabs toggleToIngredients={this.toggleToIngredients} toggleToDirections={this.toggleToDirections} selected="ingredients"/>
          <ul>
            {this.renderIngredients(recipe.ingredients)}
          </ul>
        </StyledCard>
      )
    }
    return (
      <StyledCard>
        <Tabs toggleToIngredients={this.toggleToIngredients} toggleToDirections={this.toggleToDirections} selected="directions"/>
        <ol>
          {this.renderDirections(recipe.steps)}
        </ol>
      </StyledCard>
    )
  }
}

export default RecipeInformationCard