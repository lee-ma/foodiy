import React from "react"
import { Text, GoogleButton, FacebookButton, Input, Button } from "components"
import { Formik, Form } from "formik"
import { connect } from "react-redux"
import { loginUser } from "actions"
import * as yup from "yup"

const createValidationSchema = yup.object().shape({
  email: yup.string().trim().required("Please enter your email"),
  password: yup.string().trim().required("Please enter your password")
})

const initValues = {
  email: "",
  password: ""
}

class LoginForm extends React.Component {

  login = (userInfo, hide) => {

    this.props.loginUser(userInfo, hide)
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
          onSubmit={(values) => this.login(values, hide)}
          validationSchema={createValidationSchema}
          render={() => {
            return (
              <Form>
                <Input type="email" label="Email" name="email" />
                <Input type="password" label="Password" name="password" />
                <Button primary style={{ float: "right", marginTop: "0.75em" }} type="submit">Login</Button>
              </Form>
            )
          }}
        />
      </div>
    )
  }
}

export default connect(null, { loginUser })(LoginForm)