import React from 'react'
import { Text, GoogleButton, FacebookButton } from './index'

const LoginForm = () => {
    return (
        <div>
            <div className="col-xs-12">
                <GoogleButton text="Sign in with Google" />
                <FacebookButton text="Sign in with Facebook" />
            </div>
            <Text bold style={{ marginTop: '2em', textAlign: 'center' }}>OR</Text>
            <form style={{ width: "100%" }}>
                <div className="form-group" style={{ marginTop: '2em' }}>
                    <Text>Email/Username</Text>
                    <input type="email" className="form-control" />
                    <Text>Password</Text>
                    <input className="form-control" />
                </div>
                <button className="btn btn-success" style={{ float: 'right' }} type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm