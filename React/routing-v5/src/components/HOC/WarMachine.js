import React, { Component } from "react";
import { WithSuit } from "./withSuit";

class WarMachine extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.power}</h1>
      </div>
    );
  }
}

export default WithSuit(WarMachine, "War Machine");
