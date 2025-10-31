import React from "react";
import { SizeBigHierarchy } from "../../../../components/SizeBigHierarchy";
import { SizeBigHierarchyWrapper } from "../../../../components/SizeBigHierarchyWrapper";
import { FlagsCircle1 } from "../../../../icons/FlagsCircle1";
import { FlagsCircle2 } from "../../../../icons/FlagsCircle2";

export const SectionWraper = () => {
  return (
    <div className="flex items-start gap-6 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
      <div
        className="flex flex-col items-start justify-center gap-20 px-8 py-0 relative flex-1 self-stretch grow bg-[#f2f2f4] rounded-[32px]"
        data-color-mode="light-mode"
      >
        <div
          className="flex flex-col items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
          data-color-mode="light-mode"
        >
          <div className="flex flex-col items-start justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="flex gap-1.5 pt-4 pb-0 px-0 self-stretch w-full flex-col items-start relative flex-[0_0_auto]"
                data-color-mode="light-mode"
              >
                <div
                  className="inline-flex gap-8 flex-col items-start relative flex-[0_0_auto]"
                  data-color-mode="dark-mode"
                >
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative w-5 h-5 aspect-[1]">
                      <div className="relative w-[17px] h-[17px] top-px left-px bg-[url(/img/vector-11.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-2.5 h-2.5 top-[3px] left-1"
                          alt="Vector"
                          src="/img/vector-12.svg"
                        />
                      </div>
                    </div>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#666666] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                      Pre-vetted professionals
                    </div>
                  </div>
                </div>

                <div
                  className="inline-flex gap-8 flex-col items-start relative flex-[0_0_auto]"
                  data-color-mode="dark-mode"
                >
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative w-5 h-5 aspect-[1]">
                      <div className="absolute w-[7px] h-[7px] top-px left-0.5">
                        <img
                          className="absolute w-[7px] h-0.5 top-0.5 left-0"
                          alt="Vector"
                          src="/img/vector-13.svg"
                        />

                        <img
                          className="absolute w-0.5 h-[7px] top-0 left-[5px]"
                          alt="Vector"
                          src="/img/vector-16.svg"
                        />
                      </div>

                      <img
                        className="absolute w-2 h-0.5 top-[3px] left-2.5"
                        alt="Vector"
                        src="/img/vector-14.svg"
                      />

                      <div className="absolute w-[15px] h-[13px] top-[7px] left-0.5">
                        <div className="absolute w-2 h-[13px] top-0 left-[7px]">
                          <div className="absolute w-[5px] h-[7px] top-0 left-[3px]">
                            <img
                              className="absolute w-0.5 h-[7px] top-0 left-0"
                              alt="Vector"
                              src="/img/vector-15.svg"
                            />

                            <img
                              className="absolute w-[5px] h-0.5 top-0.5 left-0"
                              alt="Vector"
                              src="/img/vector-18.svg"
                            />
                          </div>

                          <div className="absolute w-2 h-[7px] top-1.5 left-0">
                            <img
                              className="absolute w-0.5 h-[7px] top-0 left-0"
                              alt="Vector"
                              src="/img/vector-17.svg"
                            />

                            <img
                              className="absolute w-2 h-0.5 top-0.5 left-0"
                              alt="Vector"
                              src="/img/vector-20.svg"
                            />
                          </div>
                        </div>

                        <img
                          className="absolute w-[9px] h-0.5 top-0.5 left-0"
                          alt="Vector"
                          src="/img/vector-19.svg"
                        />
                      </div>

                      <img
                        className="absolute w-1.5 h-0.5 top-[15px] left-0.5"
                        alt="Vector"
                        src="/img/vector-21.svg"
                      />
                    </div>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#666666] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                      Flexible hiring options
                    </div>
                  </div>
                </div>

                <div
                  className="inline-flex gap-8 flex-col items-start relative flex-[0_0_auto]"
                  data-color-mode="dark-mode"
                >
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative w-5 h-5 aspect-[1]">
                      <div className="relative w-[17px] h-[17px] top-px left-px">
                        <img
                          className="absolute w-[15px] h-[15px] top-0 left-0.5"
                          alt="Vector"
                          src="/img/vector-22.svg"
                        />

                        <img
                          className="absolute w-2 h-2 top-[9px] left-0"
                          alt="Vector"
                          src="/img/vector-23.svg"
                        />
                      </div>
                    </div>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#666666] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                      Fast onboarding
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col items-start gap-4 pt-4 pb-0 px-0 inline-flex relative flex-[0_0_auto]">
            <div className="gap-4 inline-flex items-center relative flex-[0_0_auto]">
              <SizeBigHierarchy
                className="!flex-[0_0_auto]"
                text="Find Marketing Specialists"
              />
              <SizeBigHierarchyWrapper
                className="!flex-[0_0_auto]"
                text="See Hiring Formats Now"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[684px] h-[684px] bg-[url(/img/chatgpt-image-apr-17-2025-10-50-58-am-1.png)] bg-cover bg-[50%_50%]">
        <div className="absolute w-64 h-64 top-2.5 left-[418px] bg-[url(/img/rectangle-68.png)] bg-[100%_100%]">
          <div className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative top-[202px] left-[101px] bg-[#ffffff] rounded-[999px]">
            <FlagsCircle1 className="!relative !w-8 !h-8 !aspect-[1]" />
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#141414] text-xl tracking-[0] leading-[24.0px] whitespace-nowrap">
              Julieta A.
            </div>
          </div>
        </div>

        <div className="absolute w-64 h-64 top-[276px] left-[418px] bg-[url(/img/rectangle-68-1.png)] bg-[100%_100%]">
          <div className="inline-flex items-center justify-center gap-2.5 px-2 py-1.5 relative top-[202px] left-[107px] bg-[#ffffff] rounded-[999px]">
            <FlagsCircle2 className="!relative !w-8 !h-8 !aspect-[1]" />
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#141414] text-xl tracking-[0] leading-[24.0px] whitespace-nowrap">
              Jason S.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
