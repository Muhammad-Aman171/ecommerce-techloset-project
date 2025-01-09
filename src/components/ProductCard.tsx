import React from "react";
import AddToCartBtns from "./buttons/AddToCartBtns.tsx";
import { AiTwotoneStar } from "react-icons/ai";
import { GoHeart } from "react-icons/go";

interface ProductCardTypesProps {
  className?: string;
  heartStyle?: string;
  key?: number;
  title?: string;
  price?: number;
  image?: string;
}

const ProductCard: React.FC<ProductCardTypesProps> = ({
  className,
  heartStyle,
  key,
  title,
  price,
  image,
}) => {
  return (
    <>
      <div key={key} className={`${className} group relative `}>
        <div className="flex justify-center ">
          <img
            src={image}
            alt="Camera img does not show  "
            className="w-[154px] h-[154px] "
          />
          <span
            className={`${heartStyle} h-[27.54px] w-[27.54px] bg-[#B3D4E5] flex items-center justify-center rounded-full`}
          >
            <GoHeart />
          </span>
        </div>
        <div className=" text-start absolute bottom-4 left-5 flex flex-col gap-y-3  group-hover:hidden duration-500 ">
          <p className="text-[17.09px] font-semibold text-[#003F62] leading-[25.64px] mt-3 mb-[-10px]  ">
            {title}
          </p>
          <p className="text-[#4A4A4A] text-[17.09px] leading-[25.64px] font-semibold  ">
            {` $${price}`}
          </p>
          <div className="flex gap-x-1 ">
            <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
            <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
            <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
            <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
            <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
          </div>
        </div>
        <div className=" opacity-0 absolute bottom-3 group-hover:opacity-100 duration-500 ">
          <AddToCartBtns />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
