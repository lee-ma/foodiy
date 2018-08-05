import React, { Component } from 'react'
import { EditProfileForm, AvatarImage } from 'components'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { user } = this.props
    if (!user) return null
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div style={{ display: "flex", justifyContent: "center", verticalAlign: "center" }}>
              <AvatarImage
                size="100px"
                user={user}
                style={{ margin: "22px 10px 0 0" }}
              />
              <EditProfileForm /> {/*get rid of this later when we move to new page*/}
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
