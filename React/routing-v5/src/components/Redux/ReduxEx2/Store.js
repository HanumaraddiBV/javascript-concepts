import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./Action";
 class ReduxFirstExa extends Component {
  render() {
    return (
      <div>
        <h1>Counter : {this.props.counter}</h1>
        <button onClick={()=> this.props.incrementCount(10)}>Inc</button>
        <button onClick={()=> this.props.decrementCount(5)}>Dec</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};


const mapDispatchToProps = dispatch=>{
    return{
        incrementCount: (val)=> dispatch(actionCreators.incCount(val)),
        decrementCount: (val)=> dispatch(actionCreators.decCount(val)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ReduxFirstExa)