import React from "react";
import { Button } from "../../components/Button";
import { Icon2 } from "../../icons/Icon2";

export const NavbarHireTalent = () => {
  return (
    <div
      className="flex flex-col w-[1440px] items-center relative bg-bg border-b [border-bottom-style:solid] border-text"
      data-model-id="2001:9311"
    >
      <div className="flex w-[1440px] h-[72px] items-center justify-between px-16 py-0 relative bg-bg border-b [border-bottom-style:solid] border-black-20">
        <img
          className="relative w-[118.17px] h-7 object-cover"
          alt="Logo"
          src="/img/logo-8-1.png"
        />

        <div className="inline-flex items-center justify-center gap-[45px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-text text-base tracking-[0] leading-6 whitespace-nowrap">
                Hire Talent
              </div>

              <div className="relative w-6 h-6">
                <img
                  className="absolute w-[13px] h-[7px] top-[9px] left-1.5"
                  alt="Vector"
                  src="/img/vector-1.svg"
                />
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-6 whitespace-nowrap">
                Resources
              </div>

              <div className="relative w-6 h-6">
                <img
                  className="absolute w-[13px] h-[7px] top-[9px] left-1.5"
                  alt="Vector"
                  src="/img/vector-1.svg"
                />
              </div>
            </div>
          </div>

          <Button
            className="!flex-[0_0_auto] !bg-[linear-gradient(139deg,rgba(236,58,75,1)_0%,rgba(243,111,48,1)_100%)] !bg-[unset]"
            darkMode={false}
            iconPosition="no-icon"
            small
            style="primary"
            text="Hire Top Talent"
          />
        </div>
      </div>

      <div className="flex w-[1440px] items-start relative flex-[0_0_auto]">
        <div className="flex flex-col w-[868px] items-start justify-between pl-16 pr-8 py-8 relative self-stretch">
          <div className="flex-col gap-14 self-stretch w-full flex-[0_0_auto] flex items-start relative">
            <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                <Icon2
                  className="!relative !w-6 !h-6"
                  color="url(#paint0_linear_2001_9319)"
                />
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Engineering
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Hire expert engineers in civil, structural, mechanical, and
                    more.
                  </p>
                </div>
              </div>

              <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                <Icon2
                  className="!relative !w-6 !h-6"
                  color="url(#paint0_linear_2001_9324)"
                />
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Architecture
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Top architects specializing in commercial, residential,
                    landscape design, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-14 pt-3 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-dark-navy-20">
            <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                <div className="flex flex-col items-start relative flex-1 grow">
                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Discover our Rigorous Vetting Process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[560px] items-start gap-4 pl-8 pr-24 py-8 relative self-stretch bg-light-grey border-l [border-left-style:solid] border-dark-navy-10">
          <div className="relative self-stretch mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-text text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
            Blog
          </div>

          <div className="flex-col gap-2 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-6 px-0 py-2 flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-40 h-[105px] object-cover"
                alt="Placeholder image"
                src="/img/placeholder-image.png"
              />

              <div className="gap-2 flex-1 grow flex flex-col items-start relative">
                <div className="gap-1 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Article Title
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>

                <div className="relative w-fit bg-[linear-gradient(139deg,rgba(236,58,75,1)_0%,rgba(243,111,48,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-transparent text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
                  Read more
                </div>
              </div>
            </div>

            <div className="gap-6 px-0 py-2 flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-40 h-[105px] object-cover"
                alt="Placeholder image"
                src="/img/placeholder-image-1.png"
              />

              <div className="gap-2 flex-1 grow flex flex-col items-start relative">
                <div className="gap-1 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Article Title
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>

                <div className="relative w-fit bg-[linear-gradient(139deg,rgba(236,58,75,1)_0%,rgba(243,111,48,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-transparent text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
                  Read more
                </div>
              </div>
            </div>
          </div>

          <Button
            className="!flex-[0_0_auto] ![justify-content:unset] !px-0 !py-1"
            darkMode={false}
            icon={
              <Icon2
                className="!relative !w-6 !h-6"
                color="url(#paint0_linear_2578_7677)"
              />
            }
            iconPosition="trailing"
            small={false}
            style="link"
            text="See all articles"
          />
        </div>
      </div>
    </div>
  );
};
