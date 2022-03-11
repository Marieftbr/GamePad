import React from "react";
import GamepadLogo from "../img/gampad-logo.png";
import { useNavigate, useHref } from "react-router-dom";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Cookies from "js-cookie";
import "@szhsin/react-menu/dist/theme-dark.css";

export default function Header(props) {
  const navigate = useNavigate();
  const loginPath = useHref("/login");
  const collectionPath = useHref("/myCollection");

  const deleteCookies = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("userpicture");
    window.location.reload();
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
            <Menu
              theming="dark"
              menuButton={
                <img
                  className="header-profile-picture"
                  src={props.userPicture}
                  alt="user"
                />
              }
            >
              <MenuItem className="szh-menu__item" onClick={deleteCookies}>
                Disconnect
              </MenuItem>
            </Menu>
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
