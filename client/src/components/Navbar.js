import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
  Modal,
  LoginForm,
  SearchBar,
  AvatarImage,
  SignupForm
} from "./index"

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogin: false,
      showSignup: false
    }

    this.closeLoginModal.bind(this)
    this.openLoginModal.bind(this)
    this.closeSignupModal.bind(this)
    this.openSignupModal.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  closeLoginModal = () => {
    this.setState({ showLogin: false })
  }

  openLoginModal = () => {
    this.setState({ showLogin: true })
  }

  closeSignupModal = () => {
    this.setState({ showSignup: false })
  }

  openSignupModal = () => {
    this.setState({ showSignup: true })
  }

  handleSearchSubmit(query) {
    this.props.history.push(`/browse?q=${query.searchQuery}`)
    if (this.props.location.pathname === "/browse") window.location.reload()
  }

  renderNavLinks() {
    if (!this.props.user) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" onClick={ this.openLoginModal }>
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.openSignupModal}>
              Sign up
            </a>
          </li>
        </ul>
      )
    } else {
      // Logged in
      const { user } = this.props
      const { showCaret } = this.state
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/newrecipe">
              New Recipe
            </a>
          </li>
          <li className="nav-item dropdown" >
            <a className="nav-link dropdown f-aic"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <div className="f-aic" onClick={this.toggleCaret}>
                <AvatarImage user={user}/>
                <div style={{ marginLeft: 7.5, marginRight: 7.5 }}>
                  {user.firstName}
                </div>
                <i className="fas fa-caret-down" style={{ display: `${showCaret}` }}/>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="nav-link dropdown-item text-center" href="/profile" style={{ fontSize: "1.25em" }}>My Profile</a>
              <div className="dropdown-divider"></div>
              <a className="nav-link dropdown-item text-center" href="/api/logout" style={{ fontSize: "1.25em" }}>Logout</a>
            </div>
          </li>
        </ul>
      )
    }
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-toggleable-md navbar-light bkg-white">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">
            FOODIY
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <SearchBar handleSubmit={this.handleSearchSubmit}/>
            </ul>
            {this.renderNavLinks()}
          </div>
        </nav>
        <Modal show={this.state.showLogin} hide={this.closeLoginModal} title="Log In">
          <LoginForm hide={this.closeLoginModal} />
        </Modal>
        <Modal show={this.state.showSignup} hide={this.closeSignupModal} title="Create an Account">
          <SignupForm hide={this.closeSignupModal} />
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
