import React, { Component } from "react";
import Calculator from "./Calculator";

export default class CalcParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      operator:'+'
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
this.setState({...this.state,operator: e.target.value})
  }
  render() {
    console.log(this.state)
    return (
      <>
        <input
          type="Number"
          onChange={(e) =>
            this.setState({ ...this.state, num1: e.target.value })
          }
        />
        <input
          type="Number"
          onChange={(e) =>
            this.setState({ ...this.state, num2: e.target.value })
          }
        />
        <select value={this.state.operator} onChange={this.handleChange}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
        </select>
        <Calculator num1={this.state.num1} num2={this.state.num2} operator={this.state.operator}/>
      </>
    );
  }
}
