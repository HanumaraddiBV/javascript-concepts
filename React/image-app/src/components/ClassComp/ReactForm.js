import React, { Component } from "react";

export class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        age: "",
        city: "",
      },
    };
  }
  changeName = (e) => {
   const {value} = e.target;
    this.setState((prevState)=> ({
        user: {...prevState.user, name: value}
    }));
  
  };
  changeCity = (e) => {
    const {value} = e.target;
    this.setState((prevState)=> ({
        user: {...prevState.user, city: value}
    }));
  
  };
  changeAge = (e) => {
    const {value} = e.target;
    this.setState((prevState)=> ({
        user: {...prevState.user, age: value}
    }));
  
  };
  onSubmit = (e) => {
    e.preventDefault()
    // let res = this.state.user
    console.log('ans:', this.state.user)
  };
  clear = () => {
    this.setState({
      user: {
        name: '',
        age: '',
        city: '',
      }
    });
  };
  render() {

    return (
      <div>
      <form onSubmit={this.onSubmit}>
    
        Name:{" "}
        <Input
          funcName={this.changeName}
          name={"nameBox"}
          val={this.state.user.name}
        />
        Age:{" "}
        <Input funcName={this.changeAge} name={"ageBox"} val={this.state.user.age} />
        City :
        <Input
          funcName={this.changeCity}
          name={"cityBox"}
          val={this.state.user.city}
        />
        <Button label={"submit"} type='submit' />
        <Button label={"clear"} formAction={this.clear} />
        </form>
      </div>
    );
  }
}

function Button(props) {
  return (
    <div>
   
      <button onClick={props.formAction}>{props.label}</button>
      
    </div>
  );
}
function Input(props) {

  return (
    <>
  
        <input
          onChange={props.funcName}
          name={props.name}
          value={props.val}
        />
      
    </>
  );
}




export default ReactForm;