import React from "react";
import mockData from "./mockUserData.json";
import "./profile.css";

const Profile = () => (
  <div className="ui container min-height">
    <div className="ui basic segment right aligned">
      <img
        src={mockData.userAvatar}
        alt="Pet Avatar"
        className="ui avatar image"
      />{" "}
      Edit profile
    </div>

    <h1 className="profile-header">{mockData.user}'s profile</h1>
    <div className="user-grid">
      <div className="ui card centered">
        <div className="image">
          <img
            src={mockData.userAvatar}
            alt="User Avatar"
            className="user-avatar"
          />
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="ui middle aligned divided list">
            <div className="item custom-user-spacing">
              <div className="header">
                <i className="user icon" /> Username
              </div>
              <div className="content">Toni</div>
            </div>
            <div className="item custom-user-spacing">
              <div className="header">
                <i className="envelope icon" /> Email
              </div>
              <div className="content">morgan@thedog.com</div>
            </div>
            <div className="item custom-user-spacing">
              <div className="header">
                <i className="key icon" /> Password
              </div>
              <div className="content">********</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
