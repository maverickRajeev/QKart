import "antd/dist/antd.css";
import React, { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Thanks from "./components/Thanks";

export const config = {
  endpoint: "https://qkart-first.herokuapp.com/api/v1",
};

export default function App(props) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  },[location.pathname]);

  return (
    <div className="App">
        <Switch>

        <Route path = "/products" component = {Search}>
        </Route>

        <Route path= "/checkout" component = {Checkout}>
        </Route>

        <Route path="/thanks" component = {Thanks}>
        </Route>

        <Route path = "/register" component = {Register}>
        </Route>

        <Route path = "/login" component = {Login}>
        </Route>
        
        <Route path="/" component = {Home}>
        </Route>

        </Switch>
    </div>
  );
}
