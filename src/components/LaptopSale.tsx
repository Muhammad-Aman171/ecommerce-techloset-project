import React from "react";
import Button from "./buttons/button.tsx";
import BackImg from "../assets/imgs/backgroundimg.png";

const LaptopSale: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center mx-[55px] max-md:mx-0 max-md:rounded-0 ">
      <img
        src={BackImg}
        alt="Background img does not show"
        className="h-[417px] max-md:w-full "
      />
      <div className="absolute top-[80px] left-[800px] max-xl:left-[500px] max-xl:top-[30px] max-lg:left-[400px] max-sm:left-[60px] max-md:left-[200px] max-md:top-[80px] ">
        <Button
          content="New laptop"
          className="py-3 bg-primary w-[134px] rounded-[20px] text-white text-[14.09px] leading-[21.14px] font-medium mb-[36px] max-md:mb-3   "
        />
        <h1 className="text-[41px] font-bold leading-[61.5px] text-[#2E8FC5] mb-[12px] max-md:hidden ">
          Sale up to 50% off
        </h1>
        <h1 className="text-[41px] font-bold leading-[61.5px] text-[#2E8FC5] mb-[12px] md:hidden text-nowrap  ">
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
    </div>
  );
};

export default LaptopSale;
