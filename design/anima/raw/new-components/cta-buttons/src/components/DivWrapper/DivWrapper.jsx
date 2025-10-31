/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const DivWrapper = ({ className }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 relative rounded-[999px] overflow-hidden border border-solid border-[#c9c9d7] shadow-[0px_1px_2px_#0a0c120d] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] font-text-button font-[number:var(--text-button-font-weight)] text-[#000435] text-[length:var(--text-button-font-size)] tracking-[var(--text-button-letter-spacing)] leading-[var(--text-button-line-height)] whitespace-nowrap [font-style:var(--text-button-font-style)]">
        Button CTA
      </div>
    </div>
  );
};
