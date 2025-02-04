import React from "react";
import Button from "../buttons/Button.tsx";
import CameraImg from "../../assets/imgs/camera.png";
import FillCircle from "../slidersCircles/FillCircle.tsx";
import UnFillCircle from "../slidersCircles/UnFillCircle.tsx";

const HeroSection = () => {
  return (
    <div className="flex justify-around items-center w-full mt-14 max-lg:gap-x-[20px] max-lg:justify-evenly max-md:flex-col-reverse max-md:mx-0   ">
      <div className="flex flex-col items-start justify-around gap-y-5  max-md:items-center ">
        <span className="max-md:hidden ">
          <h1 className="text-textColor text-[43px] font-bold leading-[64.5px]  ">
            Canon
            <br />
            camera
          </h1>
        </span>
        <span className="md:hidden mt-5  ">
          <h1 className="text-textColor text-[43px] font-bold leading-[64.5px] text-center  ">
            Canon camera
          </h1>
        </span>
        <div className="flex gap-x-5 max-md:flex-col max-md:gap-y-4   ">
          <Button
            content="Shop now"
            className="bg-primary  text-white font-semibold text-[16px] leading-[24px] px-[32px] py-[18.5px] rounded-[20px] max-md:w-[300px] max-md:h-[61px] max-md:mx-0 "
          />
          <Button
            content="View more"
            className="border border-tenTextColor text-tenTextColor font-semibold text-[16px] leading-[24px] px-[28px] py-[18.5px] rounded-[20px] max-md:w-[300px] max-md:h-[61px] max-md:mx-auto "
          />
        </div>
        <div className="ml-[110px] mt-10 justify-center items-center flex gap-x-3 max-md:ml-0  ">
          <FillCircle />
          <UnFillCircle />
          <UnFillCircle />
        </div>
      </div>
      <div className="  max-md:mx-[20px] ">
        <span className=" ">
          <img
            src={CameraImg}
            alt="camera img does not show"
            className="max-md:w-[300px] max-md:h-[311px] "
          />
        </span>
        <span className=" relative  top-[-150px] right-[-250px] max-md:right-[-175px]  ">
          <p className="absolute  w-[120px] h-[114.5px] text-white bg-primary flex items-center justify-center rounded-[674.16px] text-[22px] leading-[32.36px] text-semibold ">
            only <br /> $89
          </p>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
