import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login(props) {
  return (
    <div>
      <LoginForm
        setToken={props.setToken}
        setUserName={props.setUserName}
        setUserPicture={props.setUserPicture}
      />
    </div>
  );
}
