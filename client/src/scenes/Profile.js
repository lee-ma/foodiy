import React, { Component } from 'react'
import { EditProfileForm, AvatarImage } from '../components'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showEditProfileModal: false
    }
  }

    openEditProfileModal = () => {
      this.setState({ showEditProfileModal: true })
    }

    closeEditProfileModal = () => {
      this.setState({ showEditProfileModal: false })
    }

    render() {
      const { user } = this.props
      if (!user) return null
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div style={{ display: "flex", justifyContent: "center", verticalAlign: "center" }}>
                <AvatarImage size="100px" user={user} />
                <EditProfileForm hide={this.closeEditProfileModal}/> {/*get rid of this later when we move to new page*/}
              </div>
            </div>
          </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(Home)
