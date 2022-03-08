import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GamepadLogo from "../img/gampad-logo.png";
import React from "react";
import { useState } from "react";
import client from "../api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async () => {
    const response = await client.post("/user/login", {
      email,
      password,
    });
    Cookies.set("token", response.data.token);
    props.setToken(response.data.token);
    Cookies.set("name", response.data.name);
    props.setUserName(response.data.name);
    Cookies.set("picture", response.data.picture);
    props.setUserPicture(response.data.picture);
  };

  const submitData = async (event) => {
    event.preventDefault();
    await sendData();
    navigate("/");
  };

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
              Log in to your free account to be able to get all features of
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
        <form className="login-form" onSubmit={submitData}>
          <h2 className="right-title">Login</h2>
          <div className="email">
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <input className="login-btn" type="submit" />
          <p className="little-undertext" onClick={() => navigate("/signup")}>
            Don't have an account yet ?
          </p>
        </form>
      </div>
    </div>
  );
}
