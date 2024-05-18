import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/auth";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    AuthService.logout();
    history.push("/auth/login");
  }, [history]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
