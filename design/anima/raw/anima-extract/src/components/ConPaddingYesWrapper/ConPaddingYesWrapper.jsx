/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons5 } from "../../icons/Icons5";

export const ConPaddingYesWrapper = ({
  conPadding,
  className,
  text = "Digital Marketing Strategists",
  text1 = "Develop data-driven marketing strategies to grow your brand.",
  icon = <Icons5 className="!relative !w-[50px] !h-[50px] !aspect-[1]" />,
  contentClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[405px] items-center gap-6 p-6 relative bg-[#f2f2f4] rounded-[32px] ${className}`}
    >
      <div
        className={`flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto] ${contentClassName}`}
      >
        <div className="flex flex-col items-start gap-6 w-full flex-[0_0_auto] relative self-stretch">
          {icon}
          <div className="font-h5 font-[number:var(--h5-font-weight)] text-[#000000] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] relative self-stretch [font-style:var(--h5-font-style)]">
            {text}
          </div>
        </div>

        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#666886] text-lg tracking-[0] leading-[27px]">
          {text1}
        </p>
      </div>
    </div>
  );
};

ConPaddingYesWrapper.propTypes = {
  conPadding: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};
