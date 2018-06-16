import React, { Component } from 'react'
import { Text } from '../components'

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* Probably the same component as the component we put into /browse */}
        <Text big bold>THIS IS WHERE BROWSE GOES</Text>
      </div>
    )
  }
}

export default Home
