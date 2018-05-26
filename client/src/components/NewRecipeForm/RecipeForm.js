import React from 'react'
import { Input } from '../index'
import { Form } from 'formik'
import * as yup from 'yup'

export const RecipeSchema = yup.object().shape({
  ingredients: yup.string().trim(),
  steps: yup.string().trim()
})

const RecipeForm = () => {
  return (
    <Form>
      <Input
        label="Title"
        name="title"
        type="text"
      />
    </Form>
  )
}

export default RecipeForm
