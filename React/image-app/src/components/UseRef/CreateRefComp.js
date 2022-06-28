import React, { Component } from "react";

export default class CreateRefComp extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.myRef.current = "ReddyB";
  }
  componentDidUpdate() {
    console.log("counter", this.myRef.current);
  }
  render() {
    return (
      <div>
        {/* <input ref={this.myRef}/> */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <h5>Counter Value: {this.state.count}</h5>{" "}
      </div>
    );
  }
}
