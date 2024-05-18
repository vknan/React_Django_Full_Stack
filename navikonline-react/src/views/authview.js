import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from "../components/register";
import Login from "../components/login";
import Profile from "../components/profile";
import Logout from "../components/logout";
import "../views/authview.css";
function Appview() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-container">
          <Link to="/auth/register" className="nav-link">
            Register
          </Link>
          <Link to="/auth/login" className="nav-link">
            Login
          </Link>
          <Link to="/auth/profile" className="nav-link">
            Profile
          </Link>
          <Link to="/auth/logout" className="nav-link">
            Logout
          </Link>
        </nav>

        <Switch>
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/profile" component={Profile} />
          <Route path="/auth/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default Appview;
