import React from "react";
import GamepadLogo from "../img/gampad-logo.png";

export default function Header() {
  return (
    <div className="header">
      <span className="logo-header-container">
        <img className="header-logo" src={GamepadLogo} />
        <h1 className="logo-text">Gamepad</h1>
      </span>
      <div className="btn-area">
        <span className="collection-btn">My Collection</span>
        <span className="login-btn">Login</span>
      </div>
    </div>
  );
}
