import React, { Component } from 'react'
import { Input, Text, Button } from '../index'
import { Form } from 'formik'
import * as yup from 'yup'

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
      return <Input key={index} name={`steps[${index}]`} type="text" />
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
          <div className="col-xs-12 col-sm-6">
            <Text big bold>Ingredients</Text>
            <Form id="recipe_form">
              {this.renderIngredientInputs()}
              <Button secondary type="button" onClick={this.addIngredient}>
                <i className="fas fa-plus" style={{marginRight: "5px"}}></i>
                Add Ingredient
              </Button>
            </Form>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Text big bold>Steps</Text>
            <Form>
                {this.renderStepInputs()}
              <Button secondary type="button" onClick={this.addStep}>
                <i className="fas fa-plus" style={{marginRight: "5px"}}></i>
                Add Step
              </Button>
            </Form>
          </div>
        </div>
          <div className="col-xs-12" style={{marginTop: "5em"}}>
            <Button style={{padding: "1em 5em"}}type="submit" form="recipe_form">Submit</Button>
          </div>
      </div>
    )
  }
}

export default RecipeForm
