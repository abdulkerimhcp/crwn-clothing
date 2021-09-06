import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGooleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGooleSignIn ? "google-sign-in" : ""
    } custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
