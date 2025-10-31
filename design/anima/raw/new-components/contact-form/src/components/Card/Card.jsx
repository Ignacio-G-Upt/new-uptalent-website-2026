/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Card = ({ property1, className, vector = "/img/vector.svg" }) => {
  return (
    <div
      className={`flex w-[430px] items-center gap-8 p-6 relative rounded-xl border-0 border-none bg-[linear-gradient(139deg,rgba(236,58,75,1)_0%,rgba(243,111,48,1)_100%)] border-white-50 ${className}`}
    >
      <div className="flex flex-col items-start gap-4 relative flex-1 grow">
        <div className="relative w-fit mt-[-1.00px] font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-bg text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h5-bold-font-style)]">
          Send us a message
        </div>

        <p className="relative w-fit font-text-large-normal font-[number:var(--text-large-normal-font-weight)] text-bg text-[length:var(--text-large-normal-font-size)] tracking-[var(--text-large-normal-letter-spacing)] leading-[var(--text-large-normal-line-height)] whitespace-nowrap [font-style:var(--text-large-normal-font-style)]">
          We reply within a few hours
        </p>
      </div>

      <div className="relative w-6 h-6">
        <img
          className="absolute w-6 h-3.5 top-[5px] left-0"
          alt="Vector"
          src={vector}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  property1: PropTypes.oneOf(["clicked"]),
  vector: PropTypes.string,
};
