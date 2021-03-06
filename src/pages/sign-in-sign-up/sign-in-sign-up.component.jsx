import React from "react";

import "./sign-in-sign-up.style.scss";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
