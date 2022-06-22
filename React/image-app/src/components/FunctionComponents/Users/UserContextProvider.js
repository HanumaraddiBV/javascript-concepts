import axios from "axios";
import React, { Component } from "react";
import ProductContext from "../Products/ProductContext";
import UserContext, { UserConsumer, UserProvider } from "./UserContext";
import UserDisplayComponent from "./UserDisplayComponent";

export default class UserContextProvider extends Component {
  static contextType = ProductContext;
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      productList: [],
    };
  }

  componentDidMount() {

    axios.get(`https://fakestoreapi.com/users`).then((res) => {
      let resp = res.data;
      // console.log('resp:', resp)
      this.setState({ ...this.state, userList: resp });
      //   this.setState({...this.state, productList: this.context})
    });
  }
  render() {
      this.state.productList = this.context;
      // console.log("iii", this.state.productList);
   
    return (
      <>
        <UserProvider value={this.state}>
        <UserDisplayComponent/>
        </UserProvider>
      </>
    );
  }
}

//value={[...this.state.userList,...this.state.product]}
