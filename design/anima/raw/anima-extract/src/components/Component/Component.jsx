/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons1 } from "../../icons/Icons1";
import { ButtonsBigTertiary } from "../ButtonsBigTertiary";

export const Component = ({
  property1,
  className,
  icon = <Icons1 className="!relative !w-12 !h-12 !aspect-[1]" />,
  headingClassName,
  textClassName,
  text = "✅ No long-term commitment, total flexibility",
  buttonsBigTertiaryText = "Button CTA",
  text1 = "Start Hourly",
  text2 = "Test marketing talent risk-free on an hourly basis. Perfect for short-term projects or initial evaluations.",
}) => {
  return (
    <div
      className={`flex flex-col w-[405px] h-[398px] items-center justify-between p-6 relative rounded-[32px] border border-solid border-[#e2e2e8] shadow-shadow-xl bg-[linear-gradient(180deg,rgba(242,242,244,1)_0%,rgba(255,255,255,1)_100%)] ${className}`}
    >
      <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {icon}
        <div
          className={`relative self-stretch font-h4 font-[number:var(--h4-font-weight)] text-[#000000] text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] ${headingClassName}`}
        >
          {text1}
        </div>

        <p
          className={`self-stretch text-[#666886] text-center relative font-text-regular font-[number:var(--text-regular-font-weight)] text-[length:var(--text-regular-font-size)] tracking-[var(--text-regular-letter-spacing)] leading-[var(--text-regular-line-height)] [font-style:var(--text-regular-font-style)] ${textClassName}`}
        >
          {text2}
        </p>
      </div>

      <div className="flex flex-col items-center justify-end gap-3 px-6 py-0 relative flex-1 self-stretch w-full grow">
        <p className="self-stretch text-[#999bae] text-center relative font-text-regular font-[number:var(--text-regular-font-weight)] text-[length:var(--text-regular-font-size)] tracking-[var(--text-regular-letter-spacing)] leading-[var(--text-regular-line-height)] [font-style:var(--text-regular-font-style)]">
          {text}
        </p>

        <ButtonsBigTertiary
          baseIconsColor="#EC3A4B"
          className="!flex-[0_0_auto]"
          text={buttonsBigTertiaryText}
          textClassName="!text-[#ec3a4b]"
        />
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["v-2"]),
  text: PropTypes.string,
  buttonsBigTertiaryText: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
