import React from "react";
import { DivWrapper } from "../../components/DivWrapper";
import { SizeBigHierarchy } from "../../components/SizeBigHierarchy";
import { SizeBigHierarchySecondaryStrokeStateDefault } from "../../components/SizeBigHierarchySecondaryStrokeStateDefault";
import { SizeBigHierarchySecondaryStrokeStateHover } from "../../components/SizeBigHierarchySecondaryStrokeStateHover";
import { SizeBigHierarchyWrapper } from "../../components/SizeBigHierarchyWrapper";
import { SizeSmallHierarchy } from "../../components/SizeSmallHierarchy";
import { SizeSmallHierarchySecondaryStrokeStateHover } from "../../components/SizeSmallHierarchySecondaryStrokeStateHover";
import { SizeSmallHierarchyWrapper } from "../../components/SizeSmallHierarchyWrapper";

export const Box = () => {
  return (
    <div className="relative w-96 h-[372px]" data-model-id="2244:10923-frame">
      <div className="fixed w-96 h-[372px] top-0 left-0 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
        <SizeSmallHierarchy className="!absolute !left-5 !top-5" />
        <SizeBigHierarchy className="!absolute !left-[194px] !top-5" />
        <SizeSmallHierarchyWrapper className="!absolute !left-5 !top-[108px]" />
        <SizeBigHierarchyWrapper className="!absolute !left-[184px] !top-[108px]" />
        <DivWrapper className="!absolute !left-5 !top-[204px]" />
        <SizeBigHierarchySecondaryStrokeStateDefault className="!absolute !left-[184px] !top-[204px]" />
        <SizeSmallHierarchySecondaryStrokeStateHover className="!absolute !left-5 !top-[292px]" />
        <SizeBigHierarchySecondaryStrokeStateHover className="!absolute !left-[184px] !top-[292px]" />
      </div>
    </div>
  );
};
