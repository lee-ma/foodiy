import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
  renderField(field) {
    return (
      <div className="margin-vertical-sm">
        <input
          style={{ borderRadius: '0' }}
          placeholder={field.placeholder}
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div
        className="container-fluid"
        style={{
          background:
            'url(https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d85cfa1d6d003f6e82f46bc5a394a592&auto=format&fit=crop&w=1867&q=80)',
          backgroundSize: 'auto'
        }}>
        <div className="row" style={{ minHeight: '100vh' }}>
          <div
            className="col-xs-12 col-sm-6 offset-sm-3 text-align-left"
            style={{ marginTop: '18em' }}>
            <div className="col-xs-12 col-sm-12">
              <h2
                className="sans-serif font-color-white"
                style={{ marginBottom: '1em' }}>
                Jesse! We need to cook...
              </h2>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  placeholder="Email"
                  name="email"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  placeholder="Password"
                  name="password"
                  type="password"
                  component={this.renderField}
                />
                <button
                  className="margin-vertical-md btn btn-green"
                  type="submit">
                  Login
                </button>
              </form>
              <hr
                style={{ backgroundColor: '#fff', border: '0.2px solid black' }}
              />
              <div className="text-align-center" style={{ display: 'block' }}>
                <a
                  className="google sign-in-button margin-vertical-sm"
                  style={{ marginRight: '0.3em' }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm'
})(Login);
