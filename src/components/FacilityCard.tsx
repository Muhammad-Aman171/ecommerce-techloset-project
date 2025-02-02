import React from "react";
import { FacilityCardTypesProps } from "../types/types";

const FacilityCard: React.FC<FacilityCardTypesProps> = ({
  srcImg,
  heading,
  para,
}) => {
  return (
    <div className="flex gap-x-[31px]  ">
      <div className="w-[67px] h-[67px] ">
        <img src={srcImg} alt="box img does not show" />
      </div>
      <div>
        <h3 className="text-secoundTextColor text-[22.09px] leading-[33.14px] font-semibold  ">
          {heading}
        </h3>
        <p className="text-[18.09px] text-secoundTextColor leading-[27.14px]  ">
          {para}
        </p>
      </div>
    </div>
  );
};

export default FacilityCard;
