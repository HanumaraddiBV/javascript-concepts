import React from "react";
import { Redirect } from "react-router-dom";
import FormContext, { FormConsumer } from "./FormParentContext";

class Login extends React.Component {
  static contextType = FormContext;
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false,
      admin:false
    };
  }

  componentDidMount() {}
  login = () => {
    const userData = this.context;
    console.log("userData:", userData);
    if (
      userData.name == "admin" &&
      userData.password == "8722005386@Hn"
    ) {
      fakeAuth.authenticate(() => {
        this.setState({...this.state,admin: true });
      });
    } else if(userData.name !== 'admin') {
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    }else{
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: false });
      });
    }
  };
  render() {
    console.log(this.state);

    const { from } = this.props.data.location.state || {
      from: { pathname: "/" },
    };
    console.log("from:", from);
    const { redirectToReferrer, admin } = this.state;

    if (redirectToReferrer) {
      return <Redirect to='/' />;
    }
    if(admin){
      return <Redirect to='/admin'/>
    }

    return (
      <>
        <button onClick={this.login}>Log in</button>
      </>
    );
  }
}

/* A fake authentication function */

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

export default Login;
