import React from 'react'
import { Text, GoogleButton, FacebookButton, Input } from './index'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

const createValidationSchema = yup.object().shape({
  email: yup.string().trim().required("Please enter your email"),
  password: yup.string().trim().required("Please enter your password")
})

const initValues = {
  email: "",
  password: ""
}

const LoginForm = () => {
  return (
    <div>
      <div className="col-xs-12">
        <GoogleButton text="Sign in with Google" />
        <FacebookButton text="Sign in with Facebook" />
      </div>
      <Text bold style={{ marginTop: '2em', textAlign: 'center' }}>OR</Text>
      <Formik
        intialValues={initValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={createValidationSchema}
        render={() => {
          return (
            <Form>
              <Input type="email" label="Email" name="email" />
              <Input type="password" label="Password" name="password" />
              <button className="btn btn-success" style={{ float: 'right', marginTop: '0.75em' }} type="submit">Login</button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default LoginForm