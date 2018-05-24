import React, { Component } from 'react'
import { Input, Button } from '../index'
import { Form } from 'formik'
import * as yup from 'yup'

export const InfoSchema = yup.object().shape({
  title: yup.string().trim(),
  description: yup.string().trim(),
  time: yup.string().trim()
})

const InfoForm = ({handleSubmit}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-6 offset-md-3">
          <Form onSubmit={handleSubmit}>
            <Input
              label="Title"
              name="title"
              type="text"
            />
            <Button type="submit">To Ingredients and Steps</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default InfoForm
