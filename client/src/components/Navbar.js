import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Modal,
  LoginForm,
  SearchBar
} from './index'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogin: false
    }

    this.closeLoginModal.bind(this)
    this.openLoginModal.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  closeLoginModal = () => {
    this.setState({ showLogin: false })
  }

  openLoginModal = () => {
    this.setState({ showLogin: true })
  }

  handleSearchSubmit(query) {
    this.props.history.push(`/browse?q=${query.searchQuery}`)
    if (this.props.location.pathname === "/browse") window.location.reload()
  }

  renderNavLinks() {
    if (!this.props.user) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-link" onClick={this.openLoginModal}>
            Login
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign up
            </a>
          </li>
        </ul>
      )
    } else {
      // Logged in
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/newrecipe">
              New Recipe
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
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
          <LoginForm />
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
