/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";

export const Navbar = ({
  className,
  text = "Services",
  vector = "/img/vector-8.svg",
  img = "/img/vector-8.svg",
  buttonStylePrimarySmallClassName,
  buttonText = "Start Hiring",
}) => {
  return (
    <div
      className={`flex w-[1440px] h-[72px] items-center justify-between px-16 py-0 relative bg-bg border-b [border-bottom-style:solid] border-text ${className}`}
    >
      <img
        className="relative w-[118.17px] h-7 object-cover"
        alt="Logo"
        src="/img/logo-8-1-1.png"
      />

      <div className="inline-flex items-center justify-center gap-[45px] relative flex-[0_0_auto]">
        <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
            <div className="font-bold relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-text text-base tracking-[0] leading-6 whitespace-nowrap">
              {text}
            </div>

            <div className="relative w-6 h-6">
              <img
                className="absolute w-[13px] h-[7px] top-[9px] left-1.5"
                alt="Vector"
                src={vector}
              />
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
            <div className="font-normal relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-text text-base tracking-[0] leading-6 whitespace-nowrap">
              Resources
            </div>

            <div className="relative w-6 h-6">
              <img
                className="absolute w-[13px] h-[7px] top-[9px] left-1.5"
                alt="Vector"
                src={img}
              />
            </div>
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-6 whitespace-nowrap">
            Careers
          </div>
        </div>

        <Button
          className={buttonStylePrimarySmallClassName}
          darkMode={false}
          iconPosition="no-icon"
          small
          style="primary"
          text={buttonText}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  text: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  buttonText: PropTypes.string,
};
