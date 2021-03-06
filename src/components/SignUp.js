import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GamepadLogo from "../img/gampad-logo.png";
import React from "react";
import { useState } from "react";
import client from "../api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function SignUpForm(props) {
  const inputRef = React.createRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const formData = new FormData();
    formData.append("name", username);
    formData.append("picture", picture);
    formData.append("email", email);
    formData.append("password", password);

    const response = await client.post("/user/create", formData);
    Cookies.set("token", response.data.token);
    props.setToken(response.data.token);
    Cookies.set("name", response.data.name);
    props.setUserName(response.data.name);
    Cookies.set("picture", response.data.picture);
    props.setUserPicture(response.data.picture);
    navigate("/");
  };

  const submitData = (event) => {
    event.preventDefault();
    sendData();
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
        <form className="login-form" onSubmit={submitData}>
          <h2 className="right-title">Sign up</h2>
          <div className="username">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="passwords-wrapper">
            <input
              className="space-passwords"
              name="password"
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password..."
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <div className="input-file">
            <label
              htmlFor="photo"
              className="inputfile"
              onClick={(event) => {
                inputRef.current.dispatchEvent(
                  new MouseEvent("click", {
                    bubbles: false,
                    cancelable: true,
                    view: window,
                  })
                );
              }}
              value={picture}
            >
              <input
                type="file"
                name="photo"
                ref={inputRef}
                onChange={(event) => setPicture(event.target.files[0])}
              />
              Add a photo
              <FontAwesomeIcon
                className="icon-upload"
                icon="fa-solid fa-arrow-up-from-bracket"
              />
            </label>
          </div>
          <input className="login-btn" type="submit" />
          <p className="little-undertext">Don't have an account yet ?</p>
        </form>
      </div>
    </div>
  );
}
