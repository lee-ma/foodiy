import React, { Component } from 'react'
import { Formik } from 'formik'
import { Button } from '../index'

import InfoForm, { InfoSchema } from './InfoForm'
import RecipeForm, { RecipeSchema } from './RecipeForm'

const flowControl = (current, skipNext = false, goBack = false) => {
  const flow = ["info", "recipe"]
  let currentIndex = flow.indexOf(current)
  if (skipNext) {
    currentIndex++
  }
  if (goBack) {
    return flow[ currentIndex - 1 ]
  }
  if (currentIndex !== -1) {
    return flow[ currentIndex + 1]
  }
  return flow[0]
}

const infoInitValues = (inputs) => {
  return {
    title: inputs.title || "",
    description: inputs.description || "",
    image: [],
    time: inputs.time || ""
  }
}

const recipeInitValues = {
  ingredients: [],
  steps: []
}

class NewRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stage: flowControl(""),
      inputs: {}
    }
  }

  handleSubmit = (values, action) => {
    let nextStage = ""
    if (this.state.stage === "info") {
      nextStage = "recipe"
    }
    // If the next page isn't the last page of the form, we have to save the inputs to submit all at once
    if (nextStage === "recipe") {
      let inputValues = values
      this.setState({ "stage": nextStage, "inputs": { ...this.state.inputs, ...inputValues }})
    }
    else {
      console.log({...this.state.inputs, ...values})
    }
  }

  goBack = () => {
    this.setState({ stage: flowControl(this.state.stage, false, true) })
  }

  render() {
    const { stage } = this.state
    return (
      <div>
        {(stage !== "info") && <Button style={{ marginBottom: '30px'}} onClick={() => this.goBack()}>
          <i className="fa fa-angle-left m-r-1" />
                  Back
        </Button>}
        {stage === "info" &&
          <Formik
            initialValues={infoInitValues(this.state.inputs)}
            onSubmit={(values, action) => {this.handleSubmit(values, action)}}
            component={InfoForm}
            validationSchema={InfoSchema} />
        }
        {stage === "recipe" &&
          <Formik
            initialValues={recipeInitValues}
            onSubmit={(values, action) => {this.handleSubmit(values, action)}}
            component={RecipeForm}
            validationSchema={RecipeSchema} />
        }
      </div>

    )
  }
}

export default NewRecipeForm
