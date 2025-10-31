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
}) => {
  return (
    <div
      className={`inline-flex items-center rounded-[90px] justify-center bg-dark-navy relative ${iconPosition === "trailing" ? "border border-solid" : ""} ${iconPosition === "trailing" ? "border-dark-navy" : ""} ${iconPosition === "trailing" ? "gap-5" : "gap-2"} ${iconPosition === "trailing" ? "pl-3 pr-1.5 py-2" : "px-5 py-1.5"} ${className}`}
    >
      <div
        className={`w-fit text-[#ffffff] whitespace-nowrap relative ${iconPosition === "no-icon" ? "font-text-regular-semi-bold" : "font-text-regular-medium"} ${iconPosition === "no-icon" ? "tracking-[var(--text-regular-semi-bold-letter-spacing)]" : "tracking-[var(--text-regular-medium-letter-spacing)]"} ${iconPosition === "no-icon" ? "[font-style:var(--text-regular-semi-bold-font-style)]" : "[font-style:var(--text-regular-medium-font-style)]"} ${iconPosition === "no-icon" ? "text-[length:var(--text-regular-semi-bold-font-size)]" : "text-[length:var(--text-regular-medium-font-size)]"} ${iconPosition === "no-icon" ? "font-[number:var(--text-regular-semi-bold-font-weight)]" : "font-[number:var(--text-regular-medium-font-weight)]"} ${iconPosition === "no-icon" ? "leading-[var(--text-regular-semi-bold-line-height)]" : "leading-[var(--text-regular-medium-line-height)]"}`}
      >
        {text}
      </div>

      {iconPosition === "trailing" && <Icon className="!relative !w-6 !h-6" />}
    </div>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary"]),
  small: PropTypes.bool,
  darkMode: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["no-icon", "trailing"]),
  text: PropTypes.string,
};
