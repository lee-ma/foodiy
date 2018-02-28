import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron-fluid text-align-center">
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-sm-offset-1">
              <h1 className="cursive">FOODIY</h1>
            </div>
            <div className="col-xs-12 col-sm-5">
              <a className="btn btn-danger" href="/auth/google">
                Sign in with Google
              </a>
              <br />
              <a className="btn btn-primary" href="#">
                Sign in with Facebook
              </a>
              <br />
              <a className="btn" href="#">
                Sign in with email
              </a>
              <hr />
              <a className="btn" href="#">
                Sign up with email
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
