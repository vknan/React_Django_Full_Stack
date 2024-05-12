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
import LessonsPage from "./views/lesson";
import NotFound from "./views/not-found";
import SubmodulesPage from "./views/submodules";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Blog} path="/blog" />
        <Route component={LessonsPage} path="/lessons/:courseId/:lessonId" />
        <Route component={SubmodulesPage} path="/modules/:moduleId" />
        <Route component={NotFound} path="*" />

        {/* <Redirect to="**" /> */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
