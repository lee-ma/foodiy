import React, { Component } from 'react'
import { Input, Text } from './index'
import { updateUser } from '../actions'
import { Formik, Form } from 'formik'
import { connect } from 'react-redux'
import * as yup from 'yup'

const createEditProfileSchema = yup.object().shape({
    firstName: yup.string().trim().required("Please enter your first name"),
    lastName: yup.string().trim().required("Please enter your last name")
})

class EditProfileForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: ''
        }
    }

    EditProfileValues = () => {
        return {
            firstName: this.props.user ? this.props.user.firstName || "" : "",
            lastName: this.props.user ? this.props.user.lastName || "" : ""
        }
    }

    handleSubmit = values => {
        console.log(values)
        this.props.updateUser(values)
    }

    render() {
        const { error } = this.state
        return (
            <Formik
                initialValues={this.EditProfileValues()}
                onSubmit={this.handleSubmit}
                validationSchema={createEditProfileSchema}
                render={() => {
                    return (
                        <div>
                            <Form>
                                <Input
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                />
                                <Input
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                />
                            </Form>
                            {error ? <Text error small italic>{error}</Text> : null}
                        </div>
                    )
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, { updateUser })(EditProfileForm)