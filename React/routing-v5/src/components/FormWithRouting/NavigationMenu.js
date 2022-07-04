import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Admin from "./Admin";
import FormParent, { fakeAuth } from "./FormUserData";
import HomePage from "./HomePage";
import { Products } from "./Products";


export const FormNavigationMenu = () => {
    console.log('fakeAuth.isAuthenticated:', fakeAuth.isAuthenticated)
  return (
    <div>
      <nav>
        <Link to="/login">
        {!fakeAuth.isAuthenticated?'Login':'Logout'}
        </Link>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Switch>
        <Route path="/login" component={FormParent} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};
