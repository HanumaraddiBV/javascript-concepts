import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

export default class NestingRouting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products" component={Products}></Route>
        </Switch>
      </div>
    );
  }
}
const Home = () => {
  return <h1>Home Page</h1>;
};

class Products extends Component {
  render() {
    console.log(this.props);
    const url = this.props.match.url;
    console.log("url:", url);
    const path = this.props.match.path;
    console.log("path:", path);
    return (
      <div>
        <h1>Products</h1>
        <ul>
          <li>
            <Link to={`${url}/categories`}>Categories</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${path}/categories`} component={Categories} />
        </Switch>
      </div>
    );
  }
}

class Categories extends Component {
  render() {
    const url = this.props.match.url;
    const path = this.props.match.path;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/mobiles`}>Mobiles</Link>
          </li>
          <li>
            <Link to={`${url}/laptops`}>Laptops</Link>
          </li>
          <li>
            <Link to={`${url}/tabs`}>Tabs</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${path}/mobiles`}>
            <Mobile />
          </Route>
          <Route path={`${path}/laptops`}>
            <Laptops />
          </Route>
          <Route path={`${path}/tabs`}>
            <Tabs />
          </Route>
        </Switch>
      </div>
    );
  }
}

const Mobile = () => {
  return <h1>Mobile</h1>;
};
const Laptops = () => {
  return <h1>Laptops</h1>;
};
const Tabs = () => {
  return <h1>Tabs</h1>;
};
