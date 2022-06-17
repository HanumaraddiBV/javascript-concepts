import React, { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: 0,
    };
  }
  handleValue =(a,b,operator)=>{
      if(operator == "+"){
        this.setState({res: Number(a)+Number(b)})
      }else if(operator == "-"){
        this.setState({res: Number(a)-Number(b)})
      }
      else if(operator == "*"){
        this.setState({res: Number(a)*Number(b)})
      }else{
        this.setState({res: Number(a)/Number(b)})
   
      }
  }
  
  render() {
    const { num1, num2, operator } = this.props;
    return (
      <div>
        <button onClick={()=>{
          this.handleValue(num1,num2,operator)
        }}>Result</button>
        <h1>{this.state.res}</h1>
      </div>
    );
  }
}
