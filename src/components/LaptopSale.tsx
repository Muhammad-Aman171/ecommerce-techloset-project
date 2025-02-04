import React from "react";
import Button from "./buttons/Click.tsx";
import BackImg from "../assets/imgs/backgroundimg.png";

const LaptopSale: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "417px",
      }}
      className="flex flex-col items-center justify-center w-full   "
    >
      <Button
        content="New laptop"
        className="py-3 bg-primary w-[134px] rounded-[20px] text-white text-[14.09px] leading-[21.14px] font-medium mb-[36px] max-md:mb-3   "
      />
      <h1 className="text-[41px] font-bold leading-[61.5px] text-seventhTextColor mb-[12px] max-md:hidden ">
        Sale up to 50% off
      </h1>
      <h1 className="text-[41px] font-bold leading-[61.5px] text-seventhTextColor mb-[12px] md:hidden text-nowrap  ">
        Sale up to <br /> 50% off
      </h1>
      <p className="text-[18px] leading-[27px] font-medium text-white mb-[36px]  max-md:mb-3 ">
        12 inch hd display
      </p>
      <Button
        content="Shop now"
        className="py-3 bg-primary w-[134px] rounded-[20px] text-white text-[14.09px] leading-[21.14px] font-medium  "
      />
    </div>
  );
};

export default LaptopSale;
