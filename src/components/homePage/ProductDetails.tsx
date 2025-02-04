import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import BigSpeakerImg from "../../assets/imgs/bigspeaker.png";
import NumberCircle from "../NumberCircle/NumberCircle.tsx";
import AddToCartBtn from "../buttons/AddToCartBtn.tsx";
import AddCartEye from "../buttons/AddCartEye.tsx";
import FillCircle from "../slidersCircles/FillCircle.tsx";
import UnFillCircle from "../slidersCircles/UnFillCircle.tsx";
import ProductDetailsCard from "../ProductDetailsCard.tsx";
import { NUMBER_CIRCLE } from "../../constant/ConstantsData.ts";

const ProductDetails = () => {
  const stars = Array(5).fill(null);
  const productDetailsCard = Array(2).fill(null);

  return (
    <div className="my-20  flex items-center justify-center gap-x-8  max-xl:hidden ">
      <div className="border border-thirdBorderColor rounded-[20px] px-[29px] grid grid-cols-2 items-center justify-start gap-x-[62px] ">
        <div className=" my-[62.5px] ">
          <img src={BigSpeakerImg} alt="Big speaker is not show" />
        </div>
        <div className="flex flex-col items-start gap-y-9  ">
          <div className="flex flex-col items-start gap-y-5 ">
            <h3 className="text-[21.09px] leading-[31.64px] font-semibold text-secoundTextColor ">
              JBL bar 2.1 deep bass
            </h3>
            <p className="text-[17.09px] leading-[25.64px] font-semibold text-fifthTextColor text-start  ">
              $11,70
            </p>
            <div className="flex gap-x-1 ">
              {stars?.map((_, index) => (
                <AiTwotoneStar
                  key={index}
                  className="w-[14.75px] h-[14.65px]"
                />
              ))}
            </div>
          </div>
          <div className="flex gap-x-2.5 ">
            {NUMBER_CIRCLE?.map((data, index) => (
              <NumberCircle key={index} content={data.toLocaleString()} />
            ))}
          </div>
          <div className="flex gap-x-3  ">
            <AddToCartBtn />
            <AddCartEye />
          </div>
        </div>
        <div className=" flex col-span-2 justify-center gap-x-2.5 relative top-[-50px] ">
          <FillCircle />
          <UnFillCircle />
        </div>
      </div>
      <div className="flex flex-col gap-y-[23px]  ">
        {productDetailsCard?.map((_, index) => (
          <ProductDetailsCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
