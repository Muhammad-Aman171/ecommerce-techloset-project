import React from "react";
import FacilityCard from "../FacilityCard.tsx";
import BoxImg from "../../assets/imgs/box-tick.png";
import CrownImg from "../../assets/imgs/crown.png";
import SheildImg from "../../assets/imgs/shield-security.png";

const FacilitiesSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-[#E2F4FF] rounded-[20px] gap-y-[30px] gap-x-[104px] py-[44px] px-[118px] mt-[75px] max-md:mt-0 max-md:w-full max-md:m-0 max-md:p-0 max-md:rounded-[0px] max-md:text-start max-md:py-[33px]  ">
      <FacilityCard
        srcImg={BoxImg}
        heading="Free delivery"
        para="on order above $50,00"
      />
      <FacilityCard
        srcImg={CrownImg}
        heading="Best quality"
        para="best quality in low price"
      />
      <FacilityCard
        srcImg={SheildImg}
        heading="1 year warranty"
        para="Avaliable warranty here"
      />
    </div>
  );
};

export default FacilitiesSection;
