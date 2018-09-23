import React, { Component } from "react"
import { Input, Text, Button } from "../index"
import { Form } from "formik"
import * as yup from "yup"

export const RecipeSchema = yup.object().shape({
  ingredients: yup.array().min(1, "Please enter at least one ingredient"),
  steps: yup.array().min(1, "Please enter at least one step")
})

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfIngredients: 1,
      numberOfSteps: 1
    }
  }

  addStep = () => {
    const newState = this.state.numberOfSteps + 1
    this.setState({ numberOfSteps: newState })
  }

  addIngredient = () => {
    const newState = this.state.numberOfIngredients + 1
    this.setState({ numberOfIngredients: newState })
  }

  renderStepInputs = () => {
    // Creates array of numbers from 0 --- (numberOfSteps - 1)
    const tempArr = Array.from(Array(this.state.numberOfSteps).keys())
    return tempArr.map(index => {
      return (
        <Input key={index} name={`steps[${index}]`} type="text" />
      )
    })
  }

  renderIngredientInputs = () => {
    // Creates array of numbers from 0 --- (numberOfSteps - 1)
    const tempArr = Array.from(Array(this.state.numberOfIngredients).keys())
    return tempArr.map(index => {
      return <Input key={index} name={`ingredients[${index}]`} type="text" />
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 offset-sm-1">
            <Text big semiBold green>Create a New Recipe (2/2)</Text>
            <Text style={{ marginBottom: "2.5em", fontSize: "1.35em" }}>How do we make this, boss?</Text>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-5 offset-sm-1">
            <Text big semiBold>Ingredients</Text>
            <Form id="recipe_form">
              {this.renderIngredientInputs()}
              <Button secondary type="button" onClick={this.addIngredient}>
                <i className="fas fa-plus" style={{ marginRight: "5px" }}></i>
                Add Ingredient
              </Button>
            </Form>
          </div>
          <div className="col-xs-12 col-sm-5">
            <Text big semiBold>Steps</Text>
            <Form>
              {this.renderStepInputs()}
              <Button secondary type="button" onClick={this.addStep}>
                <i className="fas fa-plus" style={{ marginRight: "5px" }}></i>
                Add Step
              </Button>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 offset-md-1">
            <Button style={{ padding: "0.75em 1.5em", width: "100%", marginTop: "5em" }}type="submit" form="recipe_form">Submit <i className="fas fa-check" style={{ marginLeft: "5px" }}></i></Button>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeForm
