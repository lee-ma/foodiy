import React, { Component } from 'react';

class Navbar extends Component {
  componentDidMount() {
    //TODO: Use redux to change navbar
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-red" style={{backgroundColor: "red"}}>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Brand</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">New Recipe</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
