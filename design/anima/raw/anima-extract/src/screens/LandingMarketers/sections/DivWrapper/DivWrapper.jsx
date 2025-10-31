import React from "react";
import { ConPaddingYesWrapper } from "../../../../components/ConPaddingYesWrapper";
import { Icons6 } from "../../../../icons/Icons6";
import { Icons7 } from "../../../../icons/Icons7";
import { Icons8 } from "../../../../icons/Icons8";

export const DivWrapper = () => {
  return (
    <div className="items-start gap-2.5 px-6 py-0 self-stretch flex flex-col relative w-full flex-[0_0_auto]">
      <div className="items-center gap-20 px-16 py-28 self-stretch rounded-[32px] overflow-hidden bg-[linear-gradient(180deg,rgba(242,242,244,1)_0%,rgba(251,251,251,1)_100%)] flex flex-col relative w-full flex-[0_0_auto]">
        <div className="w-[768px] gap-4 flex flex-col items-center relative flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'ID_Grotesk-Medium',Helvetica] font-medium text-transparent text-[44px] text-center tracking-[0] leading-[52.8px]">
              <span className="text-[#000000]">The Uptalent </span>

              <span className="text-[#7f819a]">Advantage</span>
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="justify-center gap-6 flex flex-col items-start relative flex-1 self-stretch grow">
            <ConPaddingYesWrapper
              className="!self-stretch !flex-1 !grow !w-full"
              conPadding
              text="Elite Hiring, Fast Hiring"
              text1="Top 0.5% talent, onboarded in days."
            />
            <ConPaddingYesWrapper
              className="!self-stretch !flex-1 !grow !w-full"
              conPadding
              icon={
                <Icons6 className="!w-[50px] !h-[50px] !relative !aspect-[1]" />
              }
              text="Time Zone Alignment"
              text1="Real-time collaboration, no delays."
            />
          </div>

          <img
            className="relative w-[438px] h-[520px] aspect-[0.84] object-cover"
            alt="Image advantage"
            src="/img/image-advantage-1.png"
          />

          <div className="gap-6 flex flex-col items-start relative flex-1 self-stretch grow">
            <ConPaddingYesWrapper
              className="!self-stretch !flex-1 !grow !w-full"
              conPadding
              icon={
                <Icons7 className="!w-[50px] !h-[50px] !relative !aspect-[1]" />
              }
              text="Risk-Free Hiring"
              text1="Flexible, commitment-free. Test hourly, swap free if needed."
            />
            <ConPaddingYesWrapper
              className="!self-stretch !flex-1 !grow !w-full"
              conPadding
              contentClassName="!mb-[-8.00px]"
              icon={
                <Icons8 className="!w-[50px] !h-[50px] !relative !aspect-[1]" />
              }
              text="Cost-Effective Solutions"
              text1="Save up to 40% vs. onsite hires. Flexible pricing models tailored to your business needs, delivering a high ROI."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
