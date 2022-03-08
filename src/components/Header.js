import React from "react";
import GamepadLogo from "../img/gampad-logo.png";
import { useNavigate, useHref } from "react-router-dom";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import Cookies from "js-cookie";

export default function Header(props) {
  const navigate = useNavigate();
  const loginPath = useHref("/login");
  const collectionPath = useHref("/myCollection");
  const token = props.token;
  const username = props.userName;
  const userpicture = props.userPicture;

  const deleteCookies = () => {
    Cookies.remove(token);
    Cookies.remove(username);
    Cookies.remove(userpicture);
  };
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
            <button onClick={deleteCookies}>Disconnect</button>
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
