import React from "react";
import { AccordionFaqs } from "../../../../components/AccordionFaqs";

export const FaqMarketers = () => {
  return (
    <div className="flex flex-col w-[1440px] items-center gap-20 pt-0 pb-28 px-6 relative flex-[0_0_auto]">
      <div className="flex flex-col items-center justify-center gap-2.5 px-0 py-24 relative self-stretch w-full flex-[0_0_auto] rounded-2xl bg-[linear-gradient(180deg,rgba(242,242,244,1)_0%,rgba(251,251,251,1)_100%)]">
        <div className="flex max-w-[900px] items-start gap-20 w-full flex-col relative flex-[0_0_auto]">
          <div className="gap-8 self-stretch w-full flex flex-col items-center relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-transparent text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              <span className="text-[#000000] font-h2 [font-style:var(--h2-font-style)] font-[number:var(--h2-font-weight)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] text-[length:var(--h2-font-size)]">
                {" "}
                Frequently Asked{" "}
              </span>

              <span className="text-[#7f819a] font-h2 [font-style:var(--h2-font-style)] font-[number:var(--h2-font-weight)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] text-[length:var(--h2-font-size)]">
                Questions
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="What hiring formats do you offer?"
              text1="We provide three flexible hiring options to match your needs: Hourly for short-term projects or trials, Monthly Ongoing for part-time or full-time support with predictable commitment, and Long-Term Placements for hiring top talent directly with a one-time fee. Whether you need immediate flexibility or a dedicated team member, we connect you with skilled marketing professionals in less than a week."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="Can I transition from hourly to a full-time hire?"
              text1="Yes! If you start with an hourly engagement, you can upgrade to a part-time or full-time contract at any time."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="Why Choose Uptalent for Hiring a Remote Marketing Specialist?"
              text1="Uptalent connects you with the top 0.5% of marketing talent, ensuring fast hiring in under a week. Our specialists are pre-vetted, fluent in English, and aligned with your time zone for seamless collaboration. With flexible, risk-free hiring options—hourly, monthly, or direct placement—you can test candidates without long-term commitment and replace them at no cost if needed."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="Can I hire top graphic design talent for marketing support?"
              text1={
                <>
                  Absolutely! At Uptalent, you can hire top remote graphic
                  designers who excel at supporting marketing efforts. They can
                  create compelling social media posts, design marketing
                  collateral like brochures and flyers, and craft eye-catching
                  ads that grab attention. 
                  <br />
                  Beyond that, our designers can enhance your digital presence
                  with UX/UI designs for landing pages, develop infographics to
                  simplify complex ideas, and even produce multimedia content
                  such as videos and animations to boost your campaigns. 
                  <br />
                  Whatever your marketing goals, our graphic design talent
                  delivers creative, high-impact solutions to help your brand
                  stand out.
                </>
              }
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-2xl border border-solid border-[#e2e2e8]">
              <div className="flex items-center gap-6 px-6 py-5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex-1 [font-family:'Inter',Helvetica] font-bold text-[#141414] text-lg tracking-[0] leading-[27px]">
                  How do you ensure top talent quality?
                </p>

                <div className="relative w-8 h-8 aspect-[1]">
                  <img
                    className="absolute w-[23px] h-0.5 top-[15px] left-1"
                    alt="Vector"
                    src="/img/vector-52.svg"
                  />
                </div>
              </div>

              <div className="flex items-start gap-4 pt-0 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto]">
                <p className="flex-1 mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#55555e] text-[length:var(--text-medium-font-size)] leading-[var(--text-medium-line-height)] relative tracking-[var(--text-medium-letter-spacing)] [font-style:var(--text-medium-font-style)]">
                  <span className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#55555e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    We accept only the top 0.5% of candidates through a rigorous
                    selection process. Every professional undergoes multiple
                    assessments, live interviews, and strict evaluations to
                    ensure they have the skills, experience, and English fluency
                    needed to excel in a remote work environment. Want to see
                    exactly how we vet our talent? Check out{" "}
                  </span>

                  <span className="font-[number:var(--text-medium-font-weight)] underline font-text-medium [font-style:var(--text-medium-font-style)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] text-[length:var(--text-medium-font-size)]">
                    our rigorous vetting process
                  </span>

                  <span className="font-text-medium font-[number:var(--text-medium-font-weight)] text-[#55555e] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    {" "}
                    for all the details!
                  </span>
                </p>
              </div>
            </div>

            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="What if I’m not satisfied with my hire?"
              text1="We offer a satisfaction guarantee—if you&#39;re not satisfied with the talent, we&#39;ll provide a replacement at no additional cost."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="Why is hiring the right marketers crucial for business success?"
              text1="Hiring the right marketers ensures your brand is effectively communicated to your target audience. They help drive growth by executing tailored marketing strategies that align with your business goals."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="What skills should I look for when hiring marketers?"
              text1="Look for skills in digital marketing, SEO, data analysis, content creation, and social media strategy. Strong communication and adaptability are also essential for successful marketers."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="How can marketers contribute to increasing ROI for a business?"
              text1="Marketers contribute by creating targeted campaigns, optimizing ad spends, and ensuring your messaging resonates with the right audience, all of which help increase conversion rates and drive higher ROI."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="How do I know if a marketer is a good fit for my company culture?"
              text1="A good marketer will align with your company&#39;s values and demonstrate the ability to work collaboratively. Look for candidates who are adaptable, communicative, and have a passion for your industry."
              vector="/img/vector-52.svg"
              version="abierto"
            />
            <AccordionFaqs
              className="!self-stretch !flex-[0_0_auto] !w-full"
              text="How can I assess a marketer&#39;s effectiveness during an interview?"
              text1="Ask for case studies or examples of past campaigns they&#39;ve managed. Focus on metrics such as increased web traffic, conversion rates, or successful social media strategies they&#39;ve implemented."
              vector="/img/vector-52.svg"
              version="abierto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
