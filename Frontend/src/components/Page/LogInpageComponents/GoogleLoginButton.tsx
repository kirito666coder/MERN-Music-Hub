import React from "react";
import "./styles/loginAnimatiioins.css";

const GoogleLoginButton = () => {
  return (
    <button className="google-login-btn">
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google logo"
        className="google-icon"
      />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
