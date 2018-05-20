import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class Navbar extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderNavLinks() {
    if (!this.props.user) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
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
          Brand
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
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps, { fetchUser })(Navbar);
