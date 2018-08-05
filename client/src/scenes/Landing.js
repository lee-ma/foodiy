import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'components'
import { Home, Dashboard } from 'scenes'

class Landing extends Component {
  render() {
    const { user } = this.props
    if (user === null) {
      return <Text>Loading Animation</Text>
    }
    if (user === false) {
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

export default connect(mapStateToProps)(Landing)
