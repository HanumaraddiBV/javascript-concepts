import React from "react";

import "./counter.css"
class Counter extends React.Component {
  constructor(props){
  super(props)
   this.state = {
      counter: 0,
    }
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <React.Fragment>
      <div className="counter-container">
      
      
      <div style={{border:"1px solid black", borderRadius:"50%",backgroundColor : this.state.counter == 0 ? "green" : this.state.counter > 0 ? "yellow":"red",width:"200px",height:"200px"}}></div>
      <h2>{this.state.counter}</h2>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      </div>
      </React.Fragment>
    );
  }
}

export default Counter