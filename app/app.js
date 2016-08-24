import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router"

import Layout from "./pages/Layout";
import Routing from "./pages/Routing";
import Home from "./pages/Home";



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="routing" component={Routing}></Route>
        <Route path="home" component={Home}></Route>
        <Route path="layout" component={Layout}></Route>
    </Route>
  </Router>,
  document.getElementById('main'));