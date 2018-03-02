import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="row hero-image">
            <div
              className="col-xs-12 col-sm-5 offset-sm-1"
              style={{ marginTop: '5em', marginLeft: "0", padding: "0"}}>
              <h1 className="cursive font-color-white text-align-left">FOODIY</h1>
            </div>
            <div className="mobile-card text-align-center">
              <a className="email-login sign-in-button" href="Login">
                <div class="content-wrapper text-align-center">
                  <span class="text-container">
                    <span>Sign in</span>
                  </span>
                </div>
              </a>
              <a class="email-signup sign-in-button margin-vertical-md" href="#">
                <div class="content-wrapper">
                  <span class="text-container">
                    <span>Register</span>
                  </span>
                </div>
              </a>
            </div>
            <div
              className="col-xs-12 col-sm-5 homepage-card text-align-center"
            >
              <h3 className="text-align-center">Show me tasty recipes!</h3>
                <a class="google sign-in-button margin-vertical-sm" href="/auth/google">
                  <div class="content-wrapper">
                  <div class="logo-wrapper">
                    <img src="https://developers.google.com/identity/images/g-logo.png"/>
                  </div>
                    <span class="text-container">
                      <span>Sign in with Google</span>
                    </span>
                  </div>
                </a>
              <br />
              <a class="facebook sign-in-button margin-vertical-md" href="#">
                <div class="content-wrapper">
                <div class="logo-wrapper">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png"/>
                </div>
                  <span class="text-container">
                    <span>Sign in with Facebook</span>
                  </span>
                </div>
              </a>
              <br />
              <a class="email-login sign-in-button margin-vertical-md" href="#">
                <div class="content-wrapper">
                <div class="logo-wrapper">
                  <i className="fas fa-envelope" style={{marginBottom: "2.75px"}}></i>
                </div>
                  <span class="text-container">
                    <span>Sign in with Email</span>
                  </span>
                </div>
              </a>
              <hr style={{ width: '240px' }} />
              <a class="email-signup sign-in-button" href="#">
                <div class="content-wrapper">
                <div class="logo-wrapper">
                  <i className="fas fa-at" style={{marginBottom: "2.75px"}}></i>
                </div>
                  <span class="text-container">
                    <span>Register with Email</span>
                  </span>
                </div>
              </a>
            </div>
          </div>

        <div className="row">
          <div className="col-12" style={{ marginLeft: '0.25em' }}>
            <h1
              className="font-color-green cursive"
              style={{ marginTop: '0.25em' }}>
              FOODIY
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
