import React from "react";
import ProductReview from "../swiperSliders/ProductReviewSlider.tsx";

const ProductReviewSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 items-center justify-center max-md:w-[308px] relative gap-x-10 my-10 mx-[109px] max-md:mx-0 max-md:my-5 ">
        <ProductReview />
      </div>
    </div>
  );
};

export default ProductReviewSection;
