import React, { Component } from "react"
import { Link, Route } from "react-router-dom";

export default class QuerryParams extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Route path='/' component={Product}/>
      </div>
    )
  }
}

class Product extends Component {

  render() {
    const search = this.props.location.search;
    const product_id = new URLSearchParams(search).get("product_id");
    const category = new URLSearchParams(search).get('category')
    return (
      <div>
      <p>Product ID: {product_id}</p>
      <p>Category: {category}</p>
      </div>
    );
  }
}
