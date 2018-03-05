import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row hero-image">
          <div className="mobile-card text-align-center">
            <a className="btn-green sign-in-button" href="/login">
              <div className="content-wrapper text-align-center">
                <span className="text-container">
                  <span>Sign in</span>
                </span>
              </div>
            </a>
            <a
              className="btn-yellow sign-in-button margin-vertical-md"
              href="#">
              <div className="content-wrapper">
                <span className="text-container">
                  <span>Register</span>
                </span>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-4 margin-vertical-lg">
            <div className="homepage-card text-align-center">
              <h3 className="text-align-center">Show me tasty recipes!</h3>
              <a
                className="google sign-in-button margin-vertical-sm"
                href="/auth/google">
                <div className="content-wrapper">
                  <div className="logo-wrapper">
                    <img src="https://developers.google.com/identity/images/g-logo.png" />
                  </div>
                  <span className="text-container">
                    <span>Sign in with Google</span>
                  </span>
                </div>
              </a>
              <br />
              <a
                className="facebook sign-in-button margin-vertical-md"
                href="#">
                <div className="content-wrapper">
                  <div className="logo-wrapper">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png" />
                  </div>
                  <span className="text-container">
                    <span>Sign in with Facebook</span>
                  </span>
                </div>
              </a>
              <br />
              <a
                className="btn-green sign-in-button margin-vertical-md"
                href="/login">
                <div className="content-wrapper">
                  <div className="logo-wrapper">
                    <i
                      className="fas fa-envelope"
                      style={{ marginBottom: '2.75px' }}
                    />
                  </div>
                  <span className="text-container">
                    <span>Sign in with Email</span>
                  </span>
                </div>
              </a>
              <hr style={{ width: '240px' }} />
              <a className="btn-yellow sign-in-button" href="#">
                <div className="content-wrapper">
                  <div className="logo-wrapper">
                    <i
                      className="fas fa-at"
                      style={{ marginBottom: '2.75px' }}
                    />
                  </div>
                  <span className="text-container">
                    <span>Register with Email</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12" style={{ marginLeft: '0.25em' }}>
            <h1
              className="font-color-green cursive"
              style={{ marginTop: '0.25em' }}>
              The ultimate website for foodies
            </h1>
            <h3>1. Find and save recipes you love (placeholder)</h3>
            <h3 className="margin-vertical-sm">
              2. Share your recipes to be enjoyed by people all over the world
            </h3>
            <h3 className="margin-vertical-sm">
              3. Buy and sell extra portions from people in your area
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
