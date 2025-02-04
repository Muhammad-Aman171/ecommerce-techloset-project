import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import PlayGame from "../assets/imgs/palyGame.png";

const ProductDetailsCard: React.FC = () => {
  const stars = Array(5).fill(null);
  return (
    <div className="border border-thirdBorderColor rounded-[20px] flex items-center gap-x-[50px] py-[36px] px-[21.85px]  ">
      <div className="flex justify-center flex-grow-1 ">
        <img
          src={PlayGame}
          alt="Camera img does not show"
          className="w-[282.28px] h-[168.18px] "
        />
      </div>
      <div className="text-start flex flex-col gap-y-[15px] flex-grow-0 ">
        <p className="text-[17.09px] font-semibold text-secoundTextColor leading-[25.64px] mt-3 mb-[-10px]">
          Play game
        </p>
        <p className="text-fifthTextColor text-[17.09px] leading-[25.64px] font-semibold">
          $11.93
        </p>
        <div className="flex gap-x-1">
          {stars?.map((_, index) => (
            <AiTwotoneStar key={index} className="w-[14.75px] h-[14.65px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
