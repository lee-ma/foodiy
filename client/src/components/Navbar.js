import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import {
  Modal,
  Text,
  GoogleButton,
  FacebookButton
} from './index'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogin: false
    }

    this.closeLoginModal.bind(this)
    this.openLoginModal.bind(this)
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  closeLoginModal = () => {
    this.setState({ showLogin: false })
  }

  openLoginModal = () => {
    this.setState({ showLogin: true })
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
      );
    } else {
      // Logged in
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/api/current_user">
              Current User
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
          </li>
        </ul>
      );
    }
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-toggleable-md navbar-light bkg-white"
        // style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
        >
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Recipe
              </a>
              </li>
            </ul>
            {this.renderNavLinks()}
          </div>
        </nav>
        <Modal show={this.state.showLogin} hide={this.closeLoginModal} title="Log In">
          <div className="row">
            <GoogleButton text="Sign in with Google" />
            <FacebookButton text="Sign in with Facebook" />
            <Text bold style={{marginTop: '2em', textAlign: 'center'}}>OR</Text>
            <form style={{ width: "100%" }}>
              <div className="form-group" style={{marginTop: '2em'}}>
                <Text>Email/Username</Text>
                <input type="email" className="form-control" />
                <Text>Password</Text>
                <input className="form-control" />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps, { fetchUser })(Navbar);
