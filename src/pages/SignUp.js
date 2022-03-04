import React from "react";
import SignUpForm from "../components/SignUp";

export default function SignUp(props) {
  return (
    <div>
      <SignUpForm
        setToken={props.setToken}
        setUserName={props.setUserName}
        setUserPicture={props.setUserPicture}
      />
    </div>
  );
}
