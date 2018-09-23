import React, { Component } from "react"
import { Text } from "components"
import styled from "styled-components"
import { colors, fonts } from "theme"
import { isEmpty } from "lodash"
import StickyBox from "react-sticky-box"

const StyledCard = styled("div")`
  min-height: 70vh;
  max-height: ${window.innerWidth < 992 ? "" : "70vh"};
  overflow-y: ${window.innerWidth < 992 ? "" : "scroll"};
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`

const TabButton = styled("div")`
  top: 0;
  flex: 1;
  cursor: pointer;
  text-align: center;
  padding: 0;
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
          color: selected === "ingredients" ? colors.green : colors.grey,
          borderBottom: selected === "ingredients" ? `2px solid ${colors.green}` : "2px solid transparent"
        }}
        onClick={toggleToIngredients}>Ingredients</TabButton>
      <TabButton
        style={{
          color: selected === "directions" ? colors.green : colors.grey,
          borderBottom: selected === "directions" ? `2px solid ${colors.green}` : "2px solid transparent"
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
        <li key={index} style={{ marginBottom: "0.85em" }}>
          <Text style={{ marginBottom: "0.4em", lineHeight: "1.25em" }} block>{ingredient}</Text>
        </li>
      )
    })
  }

  renderDirections(directions) {
    return directions.map((direction, index) => {
      return (
        <li style={{ marginBottom: "0.85em" }} key={index}>
          <Text style={{ marginBottom: "0.4em", lineHeight: "1.25em" }} block>{direction}</Text>
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
        <StickyBox offset={50} bottom={window.innerWidth < 767 ? true : false}>
          <div id="recipe">
            <Tabs toggleToIngredients={this.toggleToIngredients} toggleToDirections={this.toggleToDirections} selected="ingredients"/>
            <StyledCard>
              <ul>
                {this.renderIngredients(recipe.ingredients)}
              </ul>
            </StyledCard>
          </div>
        </StickyBox>
      )
    }
    return (
      <StickyBox offset={50} bottom={window.innerWidth < 767 ? true : false}>
        <div id="recipe">
          <Tabs toggleToIngredients={this.toggleToIngredients} toggleToDirections={this.toggleToDirections} selected="directions"/>
          <StyledCard>
            <ol>
              {this.renderDirections(recipe.steps)}
            </ol>
          </StyledCard>
        </div>
      </StickyBox>
    )
  }
}

export default RecipeInformationCard