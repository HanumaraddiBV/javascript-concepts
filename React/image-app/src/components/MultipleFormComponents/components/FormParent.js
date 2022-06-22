import React, { Component } from "react";
import { Button } from "./Button";
import { FormProvider } from "./FormParentContext";
import { FormUserData } from "./FormUserData";
import Input from "./Input";
import { Select } from "./Select";

export default class FormParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      email: "",
      password: "",
      confirmPassword: "",
      nxtButton: true,
      cityOptions: ["Delhi", "Bangalore", "Pune", "Gadag"],
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ ...this.state, [name]: value }, () =>
      console.log(this.state)
    );
  };
  handleClick = () => {
    const userData = this.state;
    this.setState({ ...this.state, nxtButton: false });
    console.log(userData);
  };
  render() {
    return (
      <>
        {this.state.nxtButton && (
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
            <Input
              inputType={"password"}
              name={"confirmPassword"}
              title={"Confirm Password"}
              placeholder={"Enter Your "}
              onChange={this.handleChange}
            />
            <Select
              title={"City"}
              name={"city"}
              options={this.state.cityOptions}
              value={this.state.city}
              onChange={this.handleChange}
              placeholder={"Select City"}
            />

            <Button title={"Next"} action={this.handleClick} />
          </div>
        )}
        {!this.state.nxtButton && (
          <FormProvider value={this.state}>
            <FormUserData />
          </FormProvider>
        )}
      </>
    );
  }
}
