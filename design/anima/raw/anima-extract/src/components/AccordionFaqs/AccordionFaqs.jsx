/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AccordionFaqs = ({
  version,
  className,
  vector = "/img/vector.svg",
  text = "How fast can I start working with a marketing specialist?",
  text1 = "We typically match you with candidates within 48 hours, and you can start working with them in as little as one week.",
}) => {
  return (
    <div
      className={`flex flex-col w-[732px] items-start relative bg-[#ffffff] rounded-2xl border border-solid border-[#e2e2e8] ${className}`}
    >
      <div className="flex items-center gap-6 px-6 py-5 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative flex-1 [font-family:'Inter',Helvetica] font-bold text-[#141414] text-lg tracking-[0] leading-[27px]">
          {text}
        </p>

        <div className="relative w-8 h-8 aspect-[1]">
          <img
            className="absolute w-[23px] h-0.5 top-[15px] left-1"
            alt="Vector"
            src={vector}
          />
        </div>
      </div>

      <div className="flex items-start gap-4 pt-0 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative flex-1 mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#55555e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
          {text1}
        </p>
      </div>
    </div>
  );
};

AccordionFaqs.propTypes = {
  version: PropTypes.oneOf(["abierto"]),
  vector: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
