import React from "react";
import FacilityCard from "../FacilityCard.tsx";
import { FACILITY_CARD } from "../../constant/ConstantsData.ts";

const FacilitiesSection = () => {
  return (
    <div className="flex flex-wrap justify-around items-center w-full bg-[#E2F4FF] rounded-[20px] gap-y-[30px]  py-[44px] px-[20px] max-lg:flex-col max-md:mt-0 max-md:w-full max-md:m-0 max-md:p-0 max-md:rounded-[0px] max-md:text-start max-md:py-[33px]  ">
      {FACILITY_CARD?.map((card: any, index) => (
        <FacilityCard
          key={index}
          srcImg={card.img}
          heading={card.heading}
          para={card.para}
        />
      ))}
    </div>
  );
};

export default FacilitiesSection;
