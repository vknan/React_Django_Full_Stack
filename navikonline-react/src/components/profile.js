import React from "react";
import AuthService from "../services/auth";
import "../components/profile.css";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  if (!currentUser) {
    return <div>You need to log in to view this page.</div>;
  }

  return (
    <div className="profile-container">
      <h3>Profile</h3>
      <div className="profile-details">
        <div>
          <strong>ID:</strong> {currentUser.id}
        </div>
        <div>
          <strong>Username:</strong> {currentUser.username}
        </div>
        <div>
          <strong>Email:</strong> {currentUser.email}
        </div>
      </div>
    </div>
  );
};

export default Profile;
