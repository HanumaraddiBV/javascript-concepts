import React, { Component } from "react";
import Parent from "./parent";

export default class MainData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        { name: "Reddy", age: 24, company: "clayfin" },
        { name: "Shubham", age: 25, company: "clayfin" },
        { name: "Swaraj", age: 24, company: "clayfin" },
        { name: "Nikita", age: 24, company: "clayfin" },
      ],
    };
  }
  render() {
    //  console.log(this.state.userList)
    return (
      <>
        <Parent props={this.state.userList} />
      </>
    );
  }
}
