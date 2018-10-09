import React, { Component } from "react"
import { Formik } from "formik"
import { Button } from "components"
import { connect } from "react-redux"
import { addRecipe } from "actions"

import InfoForm, { InfoSchema } from "./InfoForm"
import RecipeForm, { RecipeSchema } from "./RecipeForm"

const flowControl = (current, skipNext = false, goBack = false) => {
  const flow = ["info", "recipe"]
  let currentIndex = flow.indexOf(current)
  if (skipNext) {
    currentIndex++
  }
  if (goBack) {
    return flow[currentIndex - 1]
  }
  if (currentIndex !== -1) {
    return flow[currentIndex + 1]
  }
  return flow[0]
}

const infoInitValues = (inputs) => {
  return {
    title: inputs.title || "",
    description: inputs.description || "",
    images: inputs.images || [],
    time: inputs.time || "",
    tags: []
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

  handleSubmit = (values) => {
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
      const data = { ...this.state.inputs, ...values }

      this.props.addRecipe(data)
      this.props.history.push("/")
    }
  }

  goBack = () => {
    this.setState({ stage: flowControl(this.state.stage, false, true) })
  }

  render() {
    const { stage } = this.state
    return (
      <div style={{ marginTop: "2.5em", minHeight: "85vh" }}>
        {(stage !== "info") && <Button className="fadein back-btn" onClick={() => this.goBack()}>
          <i className="fa fa-angle-left m-r-1" />
        </Button>}
        {stage === "info" &&
          <Formik
            initialValues={infoInitValues(this.state.inputs)}
            onSubmit={(values, action) => { this.handleSubmit(values, action) }}
            component={InfoForm}
            validationSchema={InfoSchema}
          />
        }
        {stage === "recipe" &&
          <Formik
            initialValues={recipeInitValues}
            onSubmit={(values, action) => { this.handleSubmit(values, action) }}
            component={RecipeForm}
            validationSchema={RecipeSchema}
          />
        }
      </div>

    )
  }
}

export default connect(null, { addRecipe })(NewRecipeForm)
