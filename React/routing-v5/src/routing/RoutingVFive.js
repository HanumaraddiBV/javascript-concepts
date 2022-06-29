import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

export const RoutingVFive = () => {
  return (
    <div>
      
        <div>
          <nav>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/products">Products</Link>
            </p>
          </nav>
          {/* switch looks through its children and render the first one that matches */}
          <Switch>
            <Route  path="/about">
              <About />
            </Route>
            <Route  path="/products">
              <Products />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
   
    </div>
  );
};

function Home() {
  return <h1>Home page</h1>;
}
function About() {
    console.log('about')
  return <h1>About page</h1>;
}
function Products() {
    console.log('products')
  return <h1>Products page</h1>;
}
