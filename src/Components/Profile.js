import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="profile-name">Gopal Bansal</h1>
        <p className="profile-description">
          I'm a Web Developer, Programmer, and a Basketballer.
        </p>
      </div>
      <div className="profile-photo"></div>
    </div>
  );
};

export default Profile;
