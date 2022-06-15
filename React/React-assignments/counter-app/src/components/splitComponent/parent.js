import React from "react";
import ChildComponent from "./ChildComponent";
import './user.css'
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        users : undefined
    };
  }

   componentWillMount(){
    this.setState({
        users : this.props?.props})
   }
   render() {
      console.log(this.state.users)

    return (
      <React.Fragment>
       <div className="parent-div">
       {this.state.users?.map((ele,ind) => <ChildComponent key={ind} user={ele}/>)}
       </div>
      </React.Fragment>
    );
  }
}
