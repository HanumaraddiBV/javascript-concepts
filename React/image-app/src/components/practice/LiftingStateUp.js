import React, { Component } from "react";

export default class LiftingStateUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Reddy",
    };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <ChildOne val={this.state.name} handleName={this.handleName} />
        <ChildTwo name={this.state.name} />
      </div>
    );
  }
}

function ChildOne(props) {
  const { val, handleName } = props;

  return (
    <>
      <input type="text" value={val} onChange={handleName} />
    </>
  );
}

function ChildTwo(props) {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
}
