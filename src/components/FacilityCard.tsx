import React from "react";

interface FacilityCardTypesProps {
  srcImg?: string;
  heading?: string;
  para?: string;
}

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
        <h3 className="text-[#003F62] text-[22.09px] leading-[33.14px] font-semibold  ">
          {heading}
        </h3>
        <p className="text-[18.09px] text-[#003F62] leading-[27.14px]  ">
          {para}
        </p>
      </div>
    </div>
  );
};

export default FacilityCard;
