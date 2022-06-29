import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/user">User</Link></p>
        <p><Link to="/products">Products</Link></p>
        <p><Link to="/will-not-match">Will Not Match</Link></p>
        <p><Link to="/also/will/not/match">Also Will Not Match</Link></p>

        <Switch>
          <Route exact path="/" component={Home}/>
            
         
          <Route  path="/user">
            <User />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path='*' component={NoMatchComp}/>
        </Switch>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    console.log(this.props)
    return <div>Home</div>;
  }
}
class User extends Component {
  render() {
    return <div>User page</div>;
  }
}

class Products extends Component {
  render() {
    return <div>Product page</div>;
  }
}

class NoMatchComp extends Component {
  
    render() {
        //let location = useLocation();
      console.log(this.props)
      return <div> No match for <code>{this.props.location.pathname}</code></div>;
    }
  }