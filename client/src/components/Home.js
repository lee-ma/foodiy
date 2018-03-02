import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron-fluid">
          <div className="row" style={{
              height: "500px",
              backgroundImage: "url(https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&s=b3885f1c152f7357fa0a7393bb8f6112&auto=format&fit=crop&w=2550&q=80)"}}>
            <div className="col-xs-12 col-sm-5 col-sm-offset-1" style={{marginTop: "5em"}}>
              <h1 className="cursive font-color-white">FOODIY</h1>
            </div>
            <div className="col-xs-12 col-sm-5" style={{marginTop: "5em", textAlign: "center"}}>
              <a className="btn btn-danger margin-vertical-sm" href="/auth/google">
                Sign in with Google
              </a>
              <br/>
              <a className="btn btn-primary margin-vertical-sm" href="#">
                Sign in with Facebook
              </a>
              <br/>
              <a className="btn margin-vertical-sm" href="#">
                Sign in with email
              </a>
              <hr style={{backgroundColor:"white"}}/>
              <a className="btn margin-vertical-sm" href="#">
                Sign up with email
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{marginLeft: "0.25em"}}>
              <h1 className="font-color-green cursive" style={{marginTop:"0.25em"}}>FOODIY</h1>
              <h3>1. Find and save recipes you love (placeholder)</h3>
              <h3 className="margin-vertical-sm">2. Share your recipes to be enjoyed by people all over the world</h3>
              <h3 className="margin-vertical-sm">3. Buy and sell extra portions from people in your area</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
