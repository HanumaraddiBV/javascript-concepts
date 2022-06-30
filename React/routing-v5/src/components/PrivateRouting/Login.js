import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };
  render() {
    console.log('this.props.location.state:', this.props.location.state)
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <h1>You have to login to view this page</h1>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

export default Login;
