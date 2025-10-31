import React from "react";
import { CardTalent } from "../../../../components/CardTalent";
import { SizeBigHierarchy } from "../../../../components/SizeBigHierarchy";
import { FlagsCircle3 } from "../../../../icons/FlagsCircle3";
import { FlagsCircle4 } from "../../../../icons/FlagsCircle4";
import { FlagsCircle5 } from "../../../../icons/FlagsCircle5";
import { FlagsCircle6 } from "../../../../icons/FlagsCircle6";
import { FlagsCircle7 } from "../../../../icons/FlagsCircle7";
import { FlagsCircle8 } from "../../../../icons/FlagsCircle8";
import { FlagsCircle9 } from "../../../../icons/FlagsCircle9";
import { FlagsCircle10 } from "../../../../icons/FlagsCircle10";
import { IconsMarketers3 } from "../../../../icons/IconsMarketers3";
import { IconsMarketers5 } from "../../../../icons/IconsMarketers5";
import { Property1_2SeoFillYes } from "../../../../icons/Property1_2SeoFillYes";
import { Property1_4MktdesignerFillYes } from "../../../../icons/Property1_4MktdesignerFillYes";
import { Property1_6SemFillYes } from "../../../../icons/Property1_6SemFillYes";
import { Property1_7EmailFillYes } from "../../../../icons/Property1_7EmailFillYes";
import { Property1_8FillYes } from "../../../../icons/Property1_8FillYes";

export const Section = () => {
  return (
    <div className="items-center gap-20 pt-8 pb-28 px-16 self-stretch flex flex-col relative w-full flex-[0_0_auto]">
      <div className="w-[768px] gap-4 flex flex-col items-center relative flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-[668px] mt-[-1.00px] [font-family:'ID_Grotesk-Medium',Helvetica] font-medium text-transparent text-[44px] text-center tracking-[0] leading-[52.8px]">
            <span className="text-[#000000]">Hire Marketing Specialists </span>

            <span className="text-[#7f819a]">Ready to Deliver Results</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="h-[428px] gap-6 flex items-start relative self-stretch w-full">
          <CardTalent
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle3 className="!relative !w-4 !h-4" />}
            lightMode
            text="Santiago S."
          />
          <CardTalent
            avatarClassName="bg-[url(/img/avatar-2.png)]"
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 ![justify-content:unset] !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle4 className="!relative !w-4 !h-4" />}
            lightMode
            override={
              <Property1_2SeoFillYes className="!w-10 !h-10 !relative !aspect-[1]" />
            }
            text="Jimena S."
            text1="Content &amp; SEO Experts"
            text2="Boost search rankings and engagement with top-tier content marketing."
            text3="Ranked #1 on Google 🔍"
          />
          <CardTalent
            avatarClassName="bg-[url(/img/avatar-3.png)]"
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle5 className="!relative !w-4 !h-4" />}
            lightMode
            override={
              <IconsMarketers3 className="!w-10 !h-10 !relative !aspect-[1]" />
            }
            text="Aitana S."
            text1="Social Media Gurus"
            text2="Manage and scale your brand presence across social platforms."
            text3="Grew Instagram following by 300% in 6 months 🚀"
          />
          <CardTalent
            avatarClassName="bg-[url(/img/avatar-4.png)]"
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle6 className="!relative !w-4 !h-4" />}
            lightMode
            override={
              <Property1_4MktdesignerFillYes className="!w-10 !h-10 !relative !aspect-[1]" />
            }
            text="Federico S."
            text1="Marketing Designers"
            text2="Craft visuals that elevate your marketing efforts."
            text3="Designed high-converting landing pages with a 40% increase in CTR 🎨"
          />
        </div>

        <div className="h-[380px] gap-6 flex items-start relative self-stretch w-full">
          <CardTalent
            avatarClassName="bg-[url(/img/avatar-5.png)]"
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle7 className="!relative !w-4 !h-4" />}
            lightMode
            override={
              <IconsMarketers5 className="!w-10 !h-10 !relative !aspect-[1]" />
            }
            text="Agustín S."
            text1="Multimedia Designers"
            text2="Produce engaging videos and animations to boost your campaigns."
            text3="Created viral video content with over 1M views 🎥"
          />
          <CardTalent
            avatarClassName="bg-[url(/img/avatar-6.png)]"
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle8 className="!relative !w-4 !h-4" />}
            lightMode
            override={
              <Property1_6SemFillYes className="!w-10 !h-10 !relative !aspect-[1]" />
            }
            text="Cameron A."
            text1="PPC &amp; SEM Specialists"
            text2="Drive high-ROI campaigns across Google, Facebook, and LinkedIn Ads."
            text3="Achieved 8x ROAS on paid ad campaigns 💰"
          />
          <CardTalent
            avatarClassName="bg-[url(/img/avatar-7.png)]"
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle9 className="!relative !w-4 !h-4" />}
            lightMode
            override={
              <Property1_7EmailFillYes className="!w-10 !h-10 !relative !aspect-[1]" />
            }
            text="Jessica F."
            text1="Email Marketing Pros"
            text2="Optimize sequences to nurture and convert leads."
            text3="Achieved a 45% open rate 📩"
          />
          <CardTalent
            avatarClassName="bg-[url(/img/avatar-8.png)]"
            className="!self-stretch !flex-1 !grow !w-[unset]"
            contentClassName="!h-[unset] !flex-1 !grow"
            headingWraperClassName="!mb-[unset]"
            icon={<FlagsCircle10 className="!relative !w-4 !h-4" />}
            lightMode
            override={
              <Property1_8FillYes className="!w-10 !h-10 !relative !aspect-[1]" />
            }
            text="James S."
            text1="Analytics &amp; Data Wizards"
            text2="Turn raw data into actionable marketing insights."
            text3="Improved conversion rates by 30% through data-driven insights 📊"
          />
        </div>
      </div>

      <div className="items-start gap-4 pt-4 pb-0 px-0 inline-flex relative flex-[0_0_auto]">
        <SizeBigHierarchy
          className="!flex-[0_0_auto]"
          text="Hire Now and See Results Fast"
        />
      </div>
    </div>
  );
};
