/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Select = ({ className, text = "E.g. Peter", selectClassName }) => {
  return (
    <div className={`w-[544px] items-start flex relative ${className}`}>
      <div
        className={`items-center gap-4 p-3 flex-1 self-stretch grow bg-white-20 rounded-xl border border-solid border-dark-navy-20 flex relative ${selectClassName}`}
      >
        <div className="relative flex-1 mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-dark-navy-50 text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
          {text}
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  text: PropTypes.string,
};
