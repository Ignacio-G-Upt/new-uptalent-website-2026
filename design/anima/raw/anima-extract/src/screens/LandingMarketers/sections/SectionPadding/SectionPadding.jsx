import React from "react";
import { Avatar } from "../../../../components/Avatar";
import { SizeBigHierarchy } from "../../../../components/SizeBigHierarchy";

export const SectionPadding = () => {
  return (
    <div
      className="items-start gap-2.5 px-6 py-0 self-stretch flex flex-col relative w-full flex-[0_0_auto]"
      data-color-mode="dark-mode"
    >
      <div
        className="items-center justify-center gap-20 p-28 bg-[#222222] rounded-2xl overflow-hidden flex relative self-stretch w-full flex-[0_0_auto]"
        data-color-mode="dark-mode"
      >
        <div className="flex flex-col max-w-[900px] items-center justify-center gap-6 relative flex-1 grow">
          <div className="relative w-[120px] h-14">
            <div className="relative w-[123px] h-[59px] -top-0.5 -left-0.5">
              <Avatar
                className="!border-white !h-[51px] !border-[1.5px] !border-solid !absolute bg-[url(/img/avatar-12.svg)] !left-0 !w-[51px] !top-2"
                placeholder={false}
                size="lg"
                state="default"
                statusIcon={false}
                text={false}
              />
              <Avatar
                className="!border-white !h-[51px] !border-[1.5px] !border-solid !absolute bg-[url(/img/avatar-13.svg)] !left-[72px] !w-[51px] !top-2"
                placeholder={false}
                size="lg"
                state="default"
                statusIcon={false}
                text={false}
              />
              <Avatar
                className="!border-white !h-[59px] !border-[1.5px] !border-solid !absolute bg-[url(/img/avatar-14.svg)] !left-8 !w-[59px] !top-0"
                placeholder={false}
                size="xl"
                state="default"
                statusIcon={false}
                text={false}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'ID_Grotesk-Medium',Helvetica] font-medium text-[#ffffff] text-[44px] text-center tracking-[0] leading-[52.8px]">
              Ready to Hire? Get Matched with Top Talent Now
            </p>

            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#ffffffe6] text-lg text-center tracking-[0] leading-[27px]">
              No matter the hiring option, we’ll match you within 48 hours with
              pre-vetted professionals who are ready to deliver results.
            </p>
          </div>

          <div className="items-start gap-4 pt-4 pb-0 px-0 inline-flex relative flex-[0_0_auto]">
            <SizeBigHierarchy
              className="!flex-[0_0_auto]"
              text="Book a Free Consultation Today"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
