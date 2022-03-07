import React from "react";
import GamepadLogo from "../img/gampad-logo.png";
import { useNavigate, useHref } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  const loginPath = useHref("/login");
  const collectionPath = useHref("/myCollection");
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
            <a href={collectionPath} className="collection-btn">
              My Collection
            </a>
            <p>{props.userName}</p>
            <img
              className="header-profile-picture"
              src={props.userPicture}
              alt="user"
            />
          </span>
        ) : (
          <>
            <a href={loginPath} className="collection-btn">
              My Collection
            </a>
            <a href={loginPath} className="login-btn">
              Login
            </a>
          </>
        )}
      </div>
    </div>
  );
}
