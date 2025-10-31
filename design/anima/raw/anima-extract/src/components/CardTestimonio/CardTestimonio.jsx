/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CardTestimonio = ({
  version,
  imagen = "/img/imagen.png",
  text = "Michael R.",
  text1 = "E-commerce CEO",
  vector = "/img/vector-2.svg",
  img = "/img/vector-3.svg",
  vector1 = "/img/vector-4.svg",
  vector2 = "/img/vector-5.svg",
  vector3 = "/img/vector-6.svg",
  text2 = "“Uptalent provided us with a PPC expert who transformed our ad strategy in just weeks. Incredible results!”",
}) => {
  return (
    <div className="flex flex-col w-[416px] items-start gap-8 p-4 relative bg-[#f2f2f4] rounded-[32px] overflow-hidden border border-solid border-[#e2e2e8]">
      <div className="flex items-center justify-around gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <img
            className="relative w-14 h-14 object-cover"
            alt="Imagen"
            src={imagen}
          />

          <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
            <div className="mt-[-1.00px] font-[number:var(--text-regular-font-weight)] text-[#000000] relative w-fit font-text-regular text-[length:var(--text-regular-font-size)] tracking-[var(--text-regular-letter-spacing)] leading-[var(--text-regular-line-height)] whitespace-nowrap [font-style:var(--text-regular-font-style)]">
              {text}
            </div>

            <div className="font-[number:var(--text-regular-font-weight)] text-[#666886] relative w-fit font-text-regular text-[length:var(--text-regular-font-size)] tracking-[var(--text-regular-letter-spacing)] leading-[var(--text-regular-line-height)] whitespace-nowrap [font-style:var(--text-regular-font-style)]">
              {text1}
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-center gap-4 p-4 relative flex-[0_0_auto] bg-[#ffffff] rounded-3xl">
        <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
          <img className="relative w-5 h-[18.89px]" alt="Vector" src={vector} />

          <img className="relative w-5 h-[18.89px]" alt="Vector" src={img} />

          <img
            className="relative w-5 h-[18.89px]"
            alt="Vector"
            src={vector1}
          />

          <img
            className="relative w-5 h-[18.89px]"
            alt="Vector"
            src={vector2}
          />

          <img
            className="relative w-5 h-[18.89px]"
            alt="Vector"
            src={vector3}
          />
        </div>

        <p className="relative w-[352px] [font-family:'Inter',Helvetica] font-normal text-[#666886] text-lg text-center tracking-[0] leading-[27px]">
          {text2}
        </p>
      </div>
    </div>
  );
};

CardTestimonio.propTypes = {
  version: PropTypes.oneOf(["v-3"]),
  imagen: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  text2: PropTypes.string,
};
