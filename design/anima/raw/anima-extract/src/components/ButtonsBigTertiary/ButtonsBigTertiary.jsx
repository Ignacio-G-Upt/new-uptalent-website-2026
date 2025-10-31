/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BaseIcons } from "../../icons/BaseIcons";

export const ButtonsBigTertiary = ({
  className,
  textClassName,
  text = "Button CTA",
  baseIconsColor = "#000435",
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 px-0 py-4 relative rounded-[999px] overflow-hidden shadow-shadow-xs ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] font-text-regular font-[number:var(--text-regular-font-weight)] text-[#000435] text-[length:var(--text-regular-font-size)] tracking-[var(--text-regular-letter-spacing)] leading-[var(--text-regular-line-height)] whitespace-nowrap [font-style:var(--text-regular-font-style)] ${textClassName}`}
      >
        {text}
      </div>

      <BaseIcons className="!relative !w-6 !h-6" color={baseIconsColor} />
    </div>
  );
};

ButtonsBigTertiary.propTypes = {
  text: PropTypes.string,
  baseIconsColor: PropTypes.string,
};
