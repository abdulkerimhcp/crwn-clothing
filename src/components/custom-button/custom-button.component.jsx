import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGooleSingIn, ...otherProps }) => (
  <button
    className={`${isGooleSingIn ? "google-sign-in" : ""} custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
