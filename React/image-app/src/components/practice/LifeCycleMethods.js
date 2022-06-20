import React, { Component } from "react";

export default class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      place:'Chennai',
      name:"Vishal"
    };
    console.log("before", this.state);
  }


  static getDerivedStateFromProps(props, state) {
    return { color: props.clr };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ place: "Hebbal" });
    }, 8000);
  }

  shouldComponentUpdate(){
    //default value will be always true
    //we can return based on our requirement conditions
    if(this.state.name === 'Reddy'){
        return true
    }else{
      return false
    }
    

  }
  onClickFun =()=>{
    this.setState({...this.state, name:'Reddy'})
  }
  updateFun=()=>{
    this.setState({...this.state, place:'Gadag'})
  }
  render() {
    //checking the state after
    //console.log("after", this.state);
    return (
      <div>
        <h1>My fav color is {this.state.place}</h1>
        <h2>My name is {this.state.name}</h2>
        <button onClick={this.onClickFun}>Click</button>
        <button onClick={this.updateFun}>Update</button>
        
      </div>
    );
  }
}
