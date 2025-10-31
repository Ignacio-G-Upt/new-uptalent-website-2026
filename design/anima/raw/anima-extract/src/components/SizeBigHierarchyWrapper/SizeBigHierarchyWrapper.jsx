/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SizeBigHierarchyWrapper = ({ className, text = "Button CTA" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 relative rounded-[999px] overflow-hidden border border-solid border-[#b9b9cb] shadow-shadow-xs ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#000435] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
        {text}
      </div>
    </div>
  );
};

SizeBigHierarchyWrapper.propTypes = {
  text: PropTypes.string,
};
