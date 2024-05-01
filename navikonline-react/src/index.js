import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import Blog from "./views/blog";
import SinglePost from "./SinglePost";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Blog} path="/blog" />
        <Route path="/blog/:postId" component={SinglePost} />
        <Route component={NotFound} path="*" />
        {/* <Redirect to="**" /> */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
