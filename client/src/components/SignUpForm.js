import React from "react"
import { Text, GoogleButton, FacebookButton, Input, Button } from "components"
import { Formik, Form } from "formik"
import { connect } from "react-redux"
import { createUser } from "actions"
import * as yup from "yup"

const createValidationSchema = yup.object().shape({
  firstName: yup.string().trim().required("Please enter your first name"),
  lastName: yup.string().trim().required("Please enter your last name"),
  email: yup.string().trim().email("Please enter a valid email").required("Please enter your email"),
  password: yup.string().trim().min(6, "Password must be at least 6 characters").required("Please enter your password"),
  confirmPassword: yup.string().oneOf(
    [yup.ref("password")],
    "Passwords do not match",
  ).required("Please confirm your password")
})

const initValues = {
  email: "",
  password: "",
  confirmPassword: ""
}

class SignupForm extends React.Component{

  createAccount = (userInfo, hide) => {
    const { email, password, firstName, lastName } = userInfo

    this.props.createUser({ email, password, firstName, lastName }, hide)
  }

  render() {
    const { hide } = this.props
    return (
      <div>
        <div className="col-xs-12">
          <GoogleButton text="Sign in with Google" />
          <FacebookButton text="Sign in with Facebook" />
        </div>
        <Text bold style={{ marginTop: "2em" }} center>OR</Text>
        <Formik
          intialValues={initValues}
          onSubmit={(values) => this.createAccount(values, hide)}
          validationSchema={createValidationSchema}
          render={() => {
            return (
              <Form>
                <Input type="string" label="First Name" name="firstName" />
                <Input type="string" label="Last Name" name="lastName" />
                <Input type="email" label="Email" name="email" />
                <Input type="password" label="Password" name="password" />
                <Input type="password" label="Confirm Password" name="confirmPassword" />
                <Button primary style={{ float: "right", marginTop: "0.75em" }} type="submit">Sign Up</Button>
              </Form>
            )
          }}
        />
      </div>
    )
  }
}

export default connect(null, { createUser })(SignupForm)