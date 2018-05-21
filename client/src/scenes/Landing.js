import React, { Component } from 'react'
import { Home, Dashboard } from './index'

class Landing extends Component {
    render() {
        if (!this.props.user) {
            return <Home />
        }
        else {
            return <Dashboard />
        }
    }
}

const mapStateToProps = (state) => {
    user: state.auth
}