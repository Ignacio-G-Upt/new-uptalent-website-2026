import React from "react";
import { Navbar } from "../../components/Navbar";
import { DivWrapper } from "./sections/DivWrapper";
import { FaqMarketers } from "./sections/FaqMarketers";
import { Footer } from "./sections/Footer";
import { Section } from "./sections/Section";
import { SectionPadding } from "./sections/SectionPadding";
import { SectionWraper } from "./sections/SectionWraper";
import { SectionWraperWrapper } from "./sections/SectionWraperWrapper";
import { SectionWrapper } from "./sections/SectionWrapper";
import { Testimonial } from "./sections/Testimonial";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const LandingMarketers = () => {
  return (
    <div
      className="flex flex-col w-[1440px] items-start relative bg-[#fbfbfb]"
      data-model-id="2158:1841"
    >
      <Navbar
        buttonStylePrimarySmallClassName="!flex-[0_0_auto] !bg-[#ec3a4b]"
        buttonText="Hire Top talent"
        className="!self-stretch !border-[unset] ![border-bottom-style:unset] !border-b-[unset] !bg-[#f8f8f8] !w-full"
        img="/img/vector-10.svg"
        text="Hire Talent"
        vector="/img/vector-10.svg"
      />
      <SectionWraper />
      <SectionWrapper />
      <Section />
      <Testimonial />
      <SectionWraperWrapper />
      <DivWrapper />
      <SectionPadding />
      <TestimonialsSection />
      <FaqMarketers />
      <Footer />
    </div>
  );
};
