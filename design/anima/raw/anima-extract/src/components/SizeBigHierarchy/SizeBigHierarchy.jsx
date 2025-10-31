/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SizeBigHierarchy = ({ className, text = "Button CTA" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 relative rounded-[999px] overflow-hidden shadow-shadow-xs bg-[linear-gradient(139deg,rgba(236,58,75,1)_0%,rgba(243,111,48,1)_100%)] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] font-text-button font-[number:var(--text-button-font-weight)] text-[#f2f2f4] text-[length:var(--text-button-font-size)] tracking-[var(--text-button-letter-spacing)] leading-[var(--text-button-line-height)] whitespace-nowrap [font-style:var(--text-button-font-style)]">
        {text}
      </div>
    </div>
  );
};

SizeBigHierarchy.propTypes = {
  text: PropTypes.string,
};
