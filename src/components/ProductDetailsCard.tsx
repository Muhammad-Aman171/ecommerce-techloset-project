import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import  PlayGame  from "../assets/imgs/palyGame.png";

const ProductDetailsCard: React.FC = () => {
  return (
    <div className="border border-[#B6B6B6] rounded-[20px] flex items-center gap-x-[50px] py-[36px] px-[21.85px]   ">
      <div className="flex justify-center ">
        <img
          src={PlayGame}
          alt="Camera img does not show"
          className="w-[154px] h-[154px] "
        />
      </div>
      <div className="text-start flex flex-col gap-y-[15px] ">
        <p className="text-[17.09px] font-semibold text-[#003F62] leading-[25.64px] mt-3 mb-[-10px]">Play game</p>
        <p className="text-[#4A4A4A] text-[17.09px] leading-[25.64px] font-semibold">
          $11.93
        </p>
        <div className="flex gap-x-1">
          <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
          <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
          <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
          <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
          <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
