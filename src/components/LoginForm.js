import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GamepadLogo from "../img/gampad-logo.png";
import React from "react";

export default function LoginForm() {
  return (
    <div className="login-wrapper">
      <div className="part-left">
        <img className="login-logo" src={GamepadLogo} alt="logo" />
        <h1 className="left-title">How it works ?</h1>
        <div className="list-wrapper">
          <div className="element-list">
            <FontAwesomeIcon
              className="icon-lis fa-xl"
              icon="fa-regular fa-user"
            />
            <p className="text">
              Log un to your free account to be able to get all features of
              Gamepad
            </p>
          </div>
          <div className="element-list">
            <FontAwesomeIcon
              className="icon-list fa-xl"
              icon="fa-regular fa-bookmark"
            />
            <p className="text">Add a game to your collection</p>
          </div>
          <div className="element-list">
            <FontAwesomeIcon
              className="icon-list fa-xl"
              icon=" fa-regular fa-message"
            />
            <p className="text">Leave a review for a game</p>
          </div>
        </div>
      </div>
      <div className="part-right">
        <form className="login-form">
          <h2 className="right-title">Login</h2>
          <div className="email">
            <input type="email" placeholder="Email..." />
          </div>
          <div className="password">
            <input type="password" placeholder="Password..." />
          </div>
          <input classname="login-btn" type="submit" />
          <p className="little-undertext">Don't have an account yet ?</p>
        </form>
      </div>
    </div>
  );
}
