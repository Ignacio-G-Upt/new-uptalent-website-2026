import React from "react";
import { SizeBigHierarchy } from "../../../../components/SizeBigHierarchy";

export const SectionWraperWrapper = () => {
  return (
    <div className="flex flex-col items-start gap-2.5 p-6 relative self-stretch w-full flex-[0_0_auto]">
      <div className="items-center gap-20 px-16 py-28 self-stretch bg-[#f2f2f4] rounded-[32px] overflow-hidden flex flex-col relative w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-8 ml-[-24.00px] mr-[-24.00px] flex-col relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center gap-20 relative flex-[0_0_auto]">
            <div className="max-w-[900px] items-center gap-4 flex flex-col relative w-full flex-[0_0_auto]">
              <p className="relative w-[824px] mt-[-1.00px] [font-family:'ID_Grotesk-Medium',Helvetica] font-medium text-transparent text-[44px] text-center tracking-[0] leading-[52.8px]">
                <span className="text-[#000000]">
                  Hire Your Perfect Marketing Specialist{" "}
                </span>

                <span className="text-[#7f819a]">in Just 1 Week</span>
              </p>
            </div>

            <div className="flex w-[1312px] items-start gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col items-center justify-center gap-3 relative flex-1 grow">
                <img
                  className="relative self-stretch w-full aspect-[1.52]"
                  alt="Img"
                  src="/img/img-1-1.svg"
                />

                <div className="flex flex-col items-start justify-center gap-4 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-text-large font-[number:var(--text-large-font-weight)] text-[#ec3a4b] text-[length:var(--text-large-font-size)] tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-style:var(--text-large-font-style)]">
                      Step 1
                    </div>

                    <div className="relative self-stretch font-h3 font-[number:var(--h3-font-weight)] text-[#000000] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                      Define Your Needs
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#141414d9] text-lg tracking-[0] leading-[27px]">
                    Tell us your marketing goals and skill requirements.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 relative flex-1 grow">
                <img
                  className="relative self-stretch w-full aspect-[1.52] object-cover"
                  alt="Img"
                  src="/img/img-1-1-1.png"
                />

                <div className="flex flex-col items-start justify-center gap-4 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-text-large font-[number:var(--text-large-font-weight)] text-[#ec3a4b] text-[length:var(--text-large-font-size)] tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-style:var(--text-large-font-style)]">
                      Step 2
                    </div>

                    <div className="relative self-stretch font-h3 font-[number:var(--h3-font-weight)] text-[#000000] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                      Meet Top Candidates
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#141414d9] text-lg tracking-[0] leading-[27px]">
                    We handpick the top 0.5% for you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 relative flex-1 grow">
                <img
                  className="relative self-stretch w-full aspect-[1.52]"
                  alt="Img"
                  src="/img/img-1-1-2.png"
                />

                <div className="flex flex-col items-start justify-center gap-4 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-text-large font-[number:var(--text-large-font-weight)] text-[#ec3a4b] text-[length:var(--text-large-font-size)] tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-style:var(--text-large-font-style)]">
                      Step 3
                    </div>

                    <div className="relative self-stretch font-h3 font-[number:var(--h3-font-weight)] text-[#000000] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                      Hire with Confidence
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#141414d9] text-lg tracking-[0] leading-[27px]">
                    Backed by our satisfaction guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="items-start gap-4 pt-8 pb-0 px-0 inline-flex relative flex-[0_0_auto]">
            <SizeBigHierarchy
              className="!flex-[0_0_auto]"
              text=" Get Matched with Talent Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
