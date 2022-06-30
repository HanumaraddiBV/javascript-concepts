import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Admin } from "./Admin";
import { Home } from "./Home";
import Login, { fakeAuth } from "./Login";
import { PrivateRoute } from "./PrivateRoute";
import { Products } from "./Products";

export const NavigationMenu = () => {
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
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
