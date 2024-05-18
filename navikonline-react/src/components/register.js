import React, { useState } from "react";
import AuthService from "../services/auth";
import "../components/register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    AuthService.register(username, email, password).then(
      (response) => {
        setMessage("Registration successful");
      },
      (error) => {
        setMessage("Error: " + error.response.data);
      }
    );
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
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
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Register
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default Register;
