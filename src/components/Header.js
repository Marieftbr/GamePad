import React from "react";
import GamepadLogo from "../img/gampad-logo.png";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <span className="logo-header-container">
        <img
          className="header-logo"
          src={GamepadLogo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <h1 className="logo-text" onClick={() => navigate("/")}>
          Gamepad
        </h1>
      </span>
      <div className="btn-area">
        {props.token ? (
          <span className="user-infos-container">
            <span
              className="collection-btn"
              onClick={() => navigate("/myCollection")}
            >
              My Collection
            </span>
            <p>{props.userName}</p>
            <img
              className="header-profile-picture"
              src={props.userPicture}
              alt="user"
            />
          </span>
        ) : (
          <span>
            <span className="collection-btn" onClick={() => navigate("/login")}>
              My Collection
            </span>
            <span className="login-btn" onClick={() => navigate("/login")}>
              Login
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
