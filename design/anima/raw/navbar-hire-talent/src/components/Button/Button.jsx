/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../../icons/Icon";

export const Button = ({
  style,
  small,
  darkMode,
  iconPosition,
  className,
  text = "Button",
  icon = <Icon className="!relative !w-6 !h-6" />,
}) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-2 justify-center relative ${style === "primary" ? "px-5 py-1.5" : ""} ${style === "primary" ? "rounded-[90px]" : ""} ${style === "primary" ? "bg-dark-navy" : ""} ${className}`}
    >
      <div
        className={`w-fit whitespace-nowrap relative ${style === "primary" ? "font-text-regular-semi-bold" : "font-text-regular-normal"} ${style === "primary" ? "tracking-[var(--text-regular-semi-bold-letter-spacing)]" : "tracking-[var(--text-regular-normal-letter-spacing)]"} ${style === "primary" ? "[font-style:var(--text-regular-semi-bold-font-style)]" : "[font-style:var(--text-regular-normal-font-style)]"} ${style === "primary" ? "text-[length:var(--text-regular-semi-bold-font-size)]" : "text-[length:var(--text-regular-normal-font-size)]"} ${style === "primary" ? "text-white" : "text-text"} ${style === "primary" ? "font-[number:var(--text-regular-semi-bold-font-weight)]" : "font-[number:var(--text-regular-normal-font-weight)]"} ${style === "primary" ? "leading-[var(--text-regular-semi-bold-line-height)]" : "leading-[var(--text-regular-normal-line-height)]"}`}
      >
        {text}
      </div>

      {style === "link" && <>{icon}</>}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary", "link"]),
  small: PropTypes.bool,
  darkMode: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["no-icon", "trailing"]),
  text: PropTypes.string,
};
