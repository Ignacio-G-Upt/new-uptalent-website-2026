/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FlagsCircle } from "../../icons/FlagsCircle";
import { IconsMarketers } from "../../icons/IconsMarketers";

export const CardTalent = ({
  lightMode,
  className,
  contentClassName,
  headingWraperClassName,
  icon = <FlagsCircle className="!relative !w-4 !h-4 !aspect-[1]" />,
  text = "Robert S.",
  override = <IconsMarketers className="!relative !w-10 !h-10 !aspect-[1]" />,
  text1 = "Digital Marketing Strategists",
  text2 = "Develop data-driven marketing strategies to grow your brand.",
  avatarClassName,
  text3 = "Increased ROI by 120% 📈",
}) => {
  return (
    <div
      className={`flex flex-col w-[310px] items-center gap-6 p-6 relative bg-[#f9f9fa] rounded-[32px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[32px] before:[background:linear-gradient(180deg,rgba(236,58,75,0.1)_0%,rgba(236,58,75,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${className}`}
    >
      <div
        className={`h-[302px] items-start justify-between flex flex-col relative self-stretch w-full ${contentClassName}`}
      >
        <div className="gap-1 flex-1 grow flex flex-col items-start relative self-stretch w-full">
          <div className="flex flex-col items-end gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {override}
          </div>

          <div
            className={`gap-2 flex-[0_0_auto] mb-[-30.00px] flex flex-col items-start relative self-stretch w-full ${headingWraperClassName}`}
          >
            <div className="self-stretch font-h6 text-[#000000] text-[length:var(--h6-font-size)] leading-[var(--h6-line-height)] relative mt-[-1.00px] font-[number:var(--h6-font-weight)] tracking-[var(--h6-letter-spacing)] [font-style:var(--h6-font-style)]">
              {text1}
            </div>

            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#666886] text-lg tracking-[0] leading-[27px]">
              {text2}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 pb-0 px-0 relative flex-1 self-stretch w-full grow">
          <div
            className={`relative w-[54px] h-[54px] mt-[-2.00px] rounded-[200px] border-2 border-solid border-white aspect-[1] bg-[url(/img/avatar.png)] bg-cover bg-[50%_50%] ${avatarClassName}`}
          />

          <div className="items-center gap-3 flex-[0_0_auto] flex flex-col relative self-stretch w-full">
            <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              {icon}
              <div className="w-fit [font-family:'Inter',Helvetica] text-[#141414cc] text-base leading-[19.2px] whitespace-nowrap relative mt-[-1.00px] font-normal tracking-[0]">
                {text}
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#808097] text-sm text-center tracking-[0] leading-[16.8px]">
              {text3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardTalent.propTypes = {
  lightMode: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
