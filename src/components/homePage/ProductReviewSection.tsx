import React from "react";
import ProductReview from "../swiperSliders/ProductReviewSlider.tsx";

const ProductReviewSection = () => {
  return (
    <div>
      <div className=" grid grid-cols-1  relative gap-x-10 my-10 mx-12 max-md:mx-6 max-md:my-5 ">
        {/* <button className="w-9 h-9 bg-[#EAEAEA] flex items-center justify-center rounded-full absolute top-[60px] z-10  ">
      <HiOutlineArrowSmallLeft className=" w-6 h-6 " />
    </button> */}
        <ProductReview />

        {/* <button className="w-9 h-9 bg-[#EAEAEA] flex items-center justify-center rounded-full absolute top-[60px] left-[1195px] z-10 ">
      <HiOutlineArrowSmallRight className=" w-6 h-6 " />
    </button> */}
      </div>
    </div>
  );
};

export default ProductReviewSection;
