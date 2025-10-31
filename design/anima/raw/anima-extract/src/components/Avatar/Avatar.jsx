/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Avatar = ({
  size,
  placeholder,
  text,
  statusIcon,
  state,
  className,
}) => {
  return (
    <div
      className={`bg-cover rounded-[200px] bg-[50%_50%] ${size === "lg" ? "w-12" : "w-14"} ${size === "lg" ? "h-12" : "h-14"} ${size === "lg" ? "bg-[url(/img/size-lg-placeholder-false-text-false-status-icon-false-state.png)]" : "bg-[url(/img/size-xl-placeholder-false-text-false-status-icon-false-state.png)]"} ${className}`}
    />
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["lg", "xl"]),
  placeholder: PropTypes.bool,
  text: PropTypes.bool,
  statusIcon: PropTypes.bool,
  state: PropTypes.oneOf(["default"]),
};
