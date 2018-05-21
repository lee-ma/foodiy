import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import { Home, Dashboard } from './index'

class Landing extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        console.log(this.props.user)
        if (!this.props.user) {
            return <Home />
        }
        else {
            return <Dashboard />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchUser })(Landing)