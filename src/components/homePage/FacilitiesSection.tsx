import React from "react";
import FacilityCard from "../FacilityCard.tsx";
import { facilityCard } from "../../constant/ConstantsData.tsx";

// const facilityCard = [
//   { img: BoxImg, heading: "Free delivery", para: "on order above $5,000" },
//   {
//     img: CrownImg,
//     heading: "Best quality",
//     para: "best quality in low price",
//   },
//   {
//     img: SheildImg,
//     heading: "1 year warrenty",
//     para: "Avaliable warranty here",
//   },
// ];

const FacilitiesSection = () => {
  return (
    <div className="flex flex-wrap justify-around items-center w-full bg-[#E2F4FF] rounded-[20px] gap-y-[30px]  py-[44px] px-[20px] max-lg:flex-col max-md:mt-0 max-md:w-full max-md:m-0 max-md:p-0 max-md:rounded-[0px] max-md:text-start max-md:py-[33px]  ">
      {facilityCard.map((card: any, index) => (
        <FacilityCard
          key={index}
          srcImg={card?.img}
          heading={card.heading}
          para={card.para}
        />
      ))}

      {/* <FacilityCard
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
      /> */}
    </div>
  );
};

export default FacilitiesSection;
