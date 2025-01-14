import React from "react";
import ProductCard from "../ProductCard.tsx";

const PopularProductsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(308.83px,1fr))] justify-items-center  place-items-center gap-[26px] w-full mb-20 max-md:mx-0 ">
      <ProductCard className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col" />
    </div>
  );
};

export default PopularProductsCards;
