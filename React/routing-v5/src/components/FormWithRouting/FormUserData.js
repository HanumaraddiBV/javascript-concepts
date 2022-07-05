import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "./Button";
import { FormProvider } from "./FormParentContext";
import validator from "validator";
import Input from "./Input";
import { Select } from "./Select";
import Login from "./Login";

export default class FormParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        city: "",
        email: "",
        password: "",
        cityOptions: ["Delhi", "Bangalore", "Pune", "Gadag"],
      },
      userDetails: "",
      userLogin:false
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;

    // this.setState({ ...this.state, [name]: value }, () =>
    //   console.log(this.state)
    // );
    this.setState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, [name]: value },
    }));
  };
  handleClick = () => {
    if (
      this.state.user.name.length > 0 &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(
        this.state.user.password
      ) &&
      validator.isEmail(this.state.user.email)
    ) {
      alert(`${this.state.user.name} You have successfully login`);
      // fakeAuth.isAuthenticated = true;
      this.setState(
        (prevState) => ({
          ...prevState,
          userDetails: prevState.user,
        })
      );
      this.setState(
        (prevState) => ({
          ...prevState,
          userLogin: true,
        })
      );
      
    } else {
      alert("Please check properly your missing some credentials");
    }
  };

  render() {
    // console.log(this.props)
    return (
      <>
        <div>
          <Input
            inputType={"text"}
            name={"name"}
            title={"Name"}
            placeholder={"Enter Your name"}
            onChange={this.handleChange}
          />
          <Input
            inputType={"text"}
            name={"email"}
            title={"Email"}
            placeholder={"Enter Your email"}
            onChange={this.handleChange}
          />
          <Input
            inputType={"password"}
            name={"password"}
            title={"Password"}
            placeholder={"Enter Your password"}
            onChange={this.handleChange}
          />

          <Select
            title={"City"}
            name={"city"}
            options={this.state.user.cityOptions}
            value={this.state.user.city}
            onChange={this.handleChange}
            placeholder={"Select City"}
          />

          <Button title={"Submit"} action={this.handleClick} />
        </div>

        <FormProvider value={this.state.userDetails}>
          <Login data={this.props} />
        </FormProvider>
      </>
    );
  }
}

