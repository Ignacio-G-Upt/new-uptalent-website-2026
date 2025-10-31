import React from "react";
import { Avatar } from "../../../../components/Avatar";
import { CardTestimonio } from "../../../../components/CardTestimonio";
import { SizeBigHierarchy } from "../../../../components/SizeBigHierarchy";

export const Testimonial = () => {
  return (
    <div className="flex flex-col w-[1440px] items-center gap-20 pt-6 pb-28 px-16 relative flex-[0_0_auto]">
      <div className="w-[560px] gap-6 flex flex-col items-center relative flex-[0_0_auto]">
        <div className="flex items-center justify-center gap-2.5 px-1.5 py-1 relative self-stretch w-full flex-[0_0_auto] rounded shadow-shadow-xs">
          <div className="inline-flex flex-[0_0_auto] items-center relative">
            <Avatar
              className="!border-white !h-[43px] !mt-[-1.50px] !ml-[-1.50px] !mb-[-1.50px] !border-[1.5px] !border-solid !relative !aspect-[1] bg-[url(/img/avatar-9.svg)] !w-[43px]"
              placeholder={false}
              size="lg"
              state="default"
              statusIcon={false}
              text={false}
            />
            <Avatar
              className="!border-white !h-[43px] !mt-[-1.50px] !-ml-3 !mb-[-1.50px] !border-[1.5px] !border-solid !relative !aspect-[1] bg-[url(/img/avatar-10.svg)] !w-[43px]"
              placeholder={false}
              size="xl"
              state="default"
              statusIcon={false}
              text={false}
            />
            <Avatar
              className="!border-white !h-[43px] !mr-[-1.50px] !mt-[-1.50px] !-ml-3 !mb-[-1.50px] !border-[1.5px] !border-solid !relative !aspect-[1] bg-[url(/img/avatar-11.svg)] !w-[43px]"
              placeholder={false}
              size="lg"
              state="default"
              statusIcon={false}
              text={false}
            />
          </div>
        </div>

        <p className="relative self-stretch [font-family:'ID_Grotesk-Medium',Helvetica] font-medium text-transparent text-[44px] text-center tracking-[0] leading-[52.8px]">
          <span className="text-[#000000]">Real Results from </span>

          <span className="text-[#7f819a]">Satisfied Clients</span>
        </p>
      </div>

      <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <CardTestimonio
          imagen="/img/imagen-1.png"
          img="/img/vector-25.svg"
          text="Chad McPherson"
          text1="CEO, Can do more Paint"
          text2={
            <>
              5 star quality and service.
              <br />
              <br />
              Unique service with great talent and customer service. Always
              happy with the service delivery from the talented technicians.
            </>
          }
          vector="/img/vector-24.svg"
          vector1="/img/vector-26.svg"
          vector2="/img/vector-27.svg"
          vector3="/img/vector-28.svg"
          version="v-3"
        />
        <CardTestimonio
          imagen="/img/imagen-2.png"
          img="/img/vector-30.svg"
          text="Adam Mayer"
          text1="Founder / Principal de Studio-AMA"
          text2="As the owner of a small architectural firm in the U.S., I often face the challenge of finding affordable talent for my design projects. That&#39;s when I discovered Uptalent, which opened the door to a fantastic pool of skilled professionals in Latin America. I was genuinely impressed by the caliber of architecture candidates they provided. I connected with a talented individual from Argentina, who became an invaluable asset to my practice for over a year. Uptalent also simplified cross-border payments, making the entire process seamless. I wholeheartedly recommend them to anyone seeking high-quality design support for their business."
          vector="/img/vector-29.svg"
          vector1="/img/vector-31.svg"
          vector2="/img/vector-32.svg"
          vector3="/img/vector-33.svg"
          version="v-3"
        />
        <CardTestimonio
          imagen="/img/imagen-3.png"
          img="/img/vector-35.svg"
          text="Todd Svoboda"
          text1="Principal, Architrave"
          text2={
            <>
              Exceeded our expectations!
              <br />
              <br />
              UpTalent has consistently presented staff that meets or exceeds
              our expectations.
            </>
          }
          vector="/img/vector-34.svg"
          vector1="/img/vector-36.svg"
          vector2="/img/vector-37.svg"
          vector3="/img/vector-38.svg"
          version="v-3"
        />
      </div>

      <div className="items-start gap-4 pt-4 pb-0 px-0 inline-flex relative flex-[0_0_auto]">
        <SizeBigHierarchy
          className="!flex-[0_0_auto]"
          text="Discover More Success Stories"
        />
      </div>
    </div>
  );
};
