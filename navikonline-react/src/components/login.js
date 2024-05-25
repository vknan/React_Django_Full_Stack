import React, { useState } from "react";
import AuthService from "../services/auth";
import { useHistory } from "react-router-dom";
import "../components/login.css";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(
      () => {
        const courseId = localStorage.getItem("courseToEnroll");
        if (courseId) {
          localStorage.removeItem("courseToEnroll");
          history.push(`/lessons/${courseId}/1`);
        } else {
          history.push("/auth/profile");
        }
      },
      (error) => {
        setMessage("Error: " + error.response.data.detail);
      }
    );
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default Login;
