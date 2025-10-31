import React from "react";
import { Component } from "../../../../components/Component";
import { SizeBigHierarchy } from "../../../../components/SizeBigHierarchy";
import { Icons2 } from "../../../../icons/Icons2";
import { Icons3 } from "../../../../icons/Icons3";
import { Icons4 } from "../../../../icons/Icons4";

export const SectionWrapper = () => {
  return (
    <div className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl">
      <div className="items-center gap-20 px-16 py-28 self-stretch rounded-[32px_32px_0px_0px] overflow-hidden bg-[linear-gradient(180deg,rgba(242,242,244,1)_0%,rgba(251,251,251,1)_100%)] flex flex-col relative w-full flex-[0_0_auto]">
        <div className="max-w-[900px] items-center gap-4 flex flex-col relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-[532px] mt-[-1.00px] [font-family:'ID_Grotesk-Medium',Helvetica] font-medium text-transparent text-[44px] text-center tracking-[0] leading-[52.8px]">
              <span className="text-[#000000]">
                Tailored Hiring Options to{" "}
              </span>

              <span className="text-[#7f819a]">Fit Your Marketing Goals</span>
            </p>

            <p className="self-stretch font-text-large font-[number:var(--text-large-font-weight)] text-[#141414d9] text-[length:var(--text-large-font-size)] text-center leading-[var(--text-large-line-height)] relative tracking-[var(--text-large-letter-spacing)] [font-style:var(--text-large-font-style)]">
              Whether you need short-term flexibility or long-term team members,
              Uptalent offers tailored solutions to connect you with top-tier
              remote professionals in less than a week.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <Component
            buttonsBigTertiaryText="Start Hourly Today"
            className="!h-[440px] !gap-6 !flex-1 ![justify-content:unset] !grow !w-[unset]"
            headingClassName="!tracking-[var(--h3-letter-spacing)] !text-[length:var(--h3-font-size)] ![font-style:var(--h3-font-style)] !font-[number:var(--h3-font-weight)] !font-h3 !leading-[var(--h3-line-height)]"
            icon={<Icons2 className="!w-12 !h-12 !relative !aspect-[1]" />}
            property1="v-2"
            text="✅ No long-term commitment, total flexibility."
            textClassName="!tracking-[0] !text-lg ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[27px]"
          />
          <Component
            buttonsBigTertiaryText="Hire Monthly for Stability"
            className="!h-[440px] !gap-8 !flex-1 ![justify-content:unset] !grow !w-[unset]"
            headingClassName="!tracking-[var(--h3-letter-spacing)] !text-[length:var(--h3-font-size)] ![font-style:var(--h3-font-style)] !font-[number:var(--h3-font-weight)] !font-h3 !leading-[var(--h3-line-height)]"
            icon={<Icons3 className="!w-12 !h-12 !relative !aspect-[1]" />}
            property1="v-2"
            text="✅ Part-time or full-time availability, tailored to your needs."
            text1="Monthly Ongoing"
            text2="Scale your team with part-time or full-time marketing specialists. Enjoy consistent support with predictable monthly fees."
            textClassName="!tracking-[0] !text-lg ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[27px]"
          />
          <Component
            buttonsBigTertiaryText="Secure Long-Term Talent"
            className="!h-[440px] !gap-8 !flex-1 ![justify-content:unset] !grow !w-[unset]"
            headingClassName="!tracking-[var(--h3-letter-spacing)] !text-[length:var(--h3-font-size)] ![font-style:var(--h3-font-style)] !font-[number:var(--h3-font-weight)] !font-h3 !leading-[var(--h3-line-height)]"
            icon={<Icons4 className="!w-12 !h-12 !relative !aspect-[1]" />}
            property1="v-2"
            text="✅ Pay a one-time placement fee and hire directly."
            text1="Long-Term Placements"
            text2="Build a dedicated team of top talent that grows with you."
            textClassName="!tracking-[0] !text-lg ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[27px]"
          />
        </div>

        <div className="items-start gap-4 pt-4 pb-0 px-0 inline-flex relative flex-[0_0_auto]">
          <SizeBigHierarchy
            className="!flex-[0_0_auto]"
            text="Get Started Today"
          />
        </div>
      </div>
    </div>
  );
};
