import React from "react";
import { Button } from "../../components/Button";
import { Icon6 } from "../../icons/Icon6";

export const NavbarResources = () => {
  return (
    <div
      className="flex flex-col w-[1440px] items-center relative bg-bg border-b [border-bottom-style:solid] border-text"
      data-model-id="2001:9375"
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
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-6 whitespace-nowrap">
                Services
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
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-text text-base tracking-[0] leading-6 whitespace-nowrap">
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

      <div className="flex w-[1440px] h-[484px] items-start relative">
        <div className="flex-col w-[868px] justify-between pl-16 pr-8 py-8 self-stretch flex items-start relative">
          <div className="flex-col gap-3 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-col gap-14 pt-3 pb-0 px-0 self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-dark-navy-20 flex items-start relative">
              <div className="gap-8 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                      KNOWLEDGE BASE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-14 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-8 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <Icon6
                    className="!relative !w-6 !h-6"
                    color="url(#paint0_linear_2001_9390)"
                  />
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                      Blog
                    </div>

                    <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                      Stay updated with the latest trends in remote hiring and
                      talent management.
                    </p>
                  </div>
                </div>

                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <Icon6
                    className="!relative !w-6 !h-6"
                    color="url(#paint0_linear_2001_9395)"
                  />
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                      Ebooks, Guides &amp; More
                    </div>

                    <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                      Explore comprehensive resources for hiring and managing
                      top remote talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col gap-3 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-col gap-14 pt-3 pb-0 px-0 self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-dark-navy-20 flex items-start relative">
              <div className="gap-8 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                      WHY UPTALENT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-14 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-8 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <Icon6
                    className="!relative !w-6 !h-6"
                    color="url(#paint0_linear_2001_9410)"
                  />
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                      Why Hire Through Uptalent
                    </div>

                    <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                      Discover the benefits of partnering with Uptalent for your
                      remote hiring needs.
                    </p>
                  </div>
                </div>

                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <Icon6
                    className="!relative !w-6 !h-6"
                    color="url(#paint0_linear_2001_9415)"
                  />
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-text text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                      Frequently Asked Questions
                    </div>

                    <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                      Find answers to common questions about our hiring process
                      and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-14 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-8 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <Icon6
                    className="!relative !w-6 !h-6"
                    color="url(#paint0_linear_2001_9423)"
                  />
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                      Learn about our clients&#39; successes with Uptalent&#39;s
                      top-tier remote professionals.
                    </p>
                  </div>
                </div>

                <div className="gap-3 px-0 py-2 flex-1 grow flex items-start relative">
                  <Icon6
                    className="!relative !w-6 !h-6"
                    color="url(#paint0_linear_2001_9428)"
                  />
                  <div className="flex-1 grow flex flex-col items-start relative">
                    <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-text-p text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                      Learn how we ensure the highest quality by meticulously
                      screening our candidates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col w-[560px] gap-4 pl-8 pr-24 py-8 bg-light-grey border-l [border-left-style:solid] border-dark-navy-10 flex items-start relative self-stretch">
          <div className="relative self-stretch mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-text text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
            Blog
          </div>

          <div className="flex-col gap-2 w-full flex-[0_0_auto] flex items-start relative self-stretch">
            <div className="gap-6 px-0 py-2 w-full flex-[0_0_auto] flex items-start relative self-stretch">
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

            <div className="gap-6 px-0 py-2 w-full flex-[0_0_auto] flex items-start relative self-stretch">
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
              <Icon6
                className="!relative !w-6 !h-6"
                color="url(#paint0_linear_2578_6839)"
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
