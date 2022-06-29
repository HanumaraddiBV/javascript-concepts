import React, { Component } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";

export default class UseParam extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/reddy">Reddy</Link>
        </p>
        <p>
          <Link to="/swaraj">Swaraj</Link>
        </p>
        <p>
          <Link to="/shubham">Shubham</Link>
        </p>
        <p>
          <Link to="/nikita">Nikita</Link>
        </p>
        <p>
          <Link to="/babita">Babita</Link>
        </p>

        <Switch>
          <Route path="/:id" component={UserDetails} />
        </Switch>
      </div>
    );
  }
}

function UserDetails() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
