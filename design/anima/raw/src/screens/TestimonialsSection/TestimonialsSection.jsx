import React from "react";
import { Card } from "../../components/Card";
import { Select } from "../../components/Select";

export const TestimonialsSection = () => {
  return (
    <div
      className="flex flex-col w-[1440px] items-start gap-20 px-16 py-28 relative"
      data-model-id="2001:14807"
    >
      <div className="w-[1312px] gap-8 flex items-start relative flex-[0_0_auto]">
        <div className="flex flex-col items-start justify-center gap-14 p-14 relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-xl border border-solid border-white bg-[url(/img/col.png)] bg-cover bg-[50%_50%]">
          <div className="flex flex-col items-start gap-20 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="absolute w-[393px] h-[19px] top-[247px] left-14"
              alt="Vector"
              src="/img/vector-18.svg"
            />
          </div>

          <div className="flex flex-col w-[430px] items-start gap-3 relative flex-[0_0_auto]">
            <Card
              className="!self-stretch !flex-[0_0_auto] !w-full"
              property1="clicked"
              vector="/img/vector-1.svg"
            />
            <div className="border-[0.5px] border-solid border-white-50 flex items-center gap-8 p-6 relative self-stretch w-full flex-[0_0_auto] rounded-xl">
              <div className="gap-4 flex flex-col items-start relative flex-1 grow">
                <p className="relative w-fit mt-[-1.00px] font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-bg text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h5-bold-font-style)]">
                  Book a 15-min intro call
                </p>

                <p className="relative self-stretch font-text-large-normal font-[number:var(--text-large-normal-font-weight)] text-bg text-[length:var(--text-large-normal-font-size)] tracking-[var(--text-large-normal-letter-spacing)] leading-[var(--text-large-normal-line-height)] [font-style:var(--text-large-normal-font-style)]">
                  Learn more about how Uptalent works and how it can help you.
                </p>
              </div>

              <div className="relative w-6 h-6">
                <img
                  className="absolute w-6 h-3.5 top-[5px] left-0"
                  alt="Vector"
                  src="/img/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center gap-8 p-14 self-stretch mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] rounded-xl border border-solid border-white bg-[url(/img/content.png)] bg-cover bg-[50%_50%] flex flex-col items-start relative flex-1 grow">
          <div className="flex items-center gap-2.5 pt-0 pb-8 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-dark-navy text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
              Send us a message
            </div>
          </div>

          <div className="flex-col justify-center gap-6 self-stretch w-full flex items-start relative flex-[0_0_auto]">
            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  First name
                </div>

                <Select className="!self-stretch !flex-[0_0_auto] !w-full" />
              </div>

              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  Last name
                </div>

                <Select
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  text="E.g. Jones"
                />
              </div>
            </div>

            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  Company Email
                </div>

                <Select
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  text="E.g. peter@company.com"
                />
              </div>
            </div>

            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  Company name
                </div>

                <Select
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  text="E.g. Netflix"
                />
              </div>

              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  Company website
                </div>

                <Select
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  text="E.g. www.netflix.com"
                />
              </div>
            </div>

            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  Mobile Phone
                </div>

                <Select
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  text="Where can we contact you?"
                />
              </div>

              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  Position
                </div>

                <Select
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  text="Your role at the company"
                />
              </div>
            </div>

            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <p className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-dark-navy text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                  How can we help you?
                </p>

                <Select
                  className="!self-stretch !h-[104px] !w-full"
                  selectClassName="!items-start"
                  text={
                    <>
                      Please tell us your specific needs
                      <br />
                      What’s the best mobile number to reach you at?
                    </>
                  }
                />
              </div>
            </div>

            <button className="all-[unset] box-border inline-flex items-center justify-center gap-5 px-[46px] py-3 relative flex-[0_0_auto] bg-dark-navy rounded-[90px]">
              <button className="all-[unset] box-border relative w-fit font-text-medium-medium font-[number:var(--text-medium-medium-font-weight)] text-bg text-[length:var(--text-medium-medium-font-size)] tracking-[var(--text-medium-medium-letter-spacing)] leading-[var(--text-medium-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-medium-font-style)]">
                Send
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
