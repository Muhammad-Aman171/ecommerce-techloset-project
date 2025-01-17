import React, { useState } from "react";
import StarImg from "../assets/imgs/star.png";
import Button from "../components/buttons/button.tsx";
import { GoHeart } from "react-icons/go";
import { TbBrandGoogle } from "react-icons/tb";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiWhatsappLogo } from "react-icons/pi";
import { GoCheck } from "react-icons/go";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store.ts";

const ProductDetails: React.FC = () => {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const allProducts = useSelector(
    (state: RootState) => state.productSlice.products
  );

  const product = allProducts.find((product) => product.id === Number(id));

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="flex justify-center mx-auto  ">
      <div className="flex flex-col items-center justify-center gap-x-[49px] m-[30px] max-md:mx-[20px] ">
        <div className="flex items-center justify-center gap-x-[49px] max-xl:flex-col  ">
          <div className=" flex flex-col items-center gap-y-[25px] ">
            <div className=" max-sm:w-[300px] max-xl:mb-[50px] ">
              <img
                src={product.image}
                alt="play game img does not show"
                className="w-[630px] h-[500px] max-lg:w-[400px] max-sm:h-[300px]  "
              />
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex flex-col gap-y-4 ">
              <h1 className="text-[29.68px] text-[#003F62] leading-[44.51px] font-medium text-start text-nowrap ">
                {product.title.slice(0, 15) + "..."}
              </h1>
              <h2 className="text-[29.68px] text-[#4A4A4A] leading-[44.51px] font-semibold text-start text-nowrap ">
                {product.price}
              </h2>
              <div className="flex items-center gap-x-[9.67px] text-nowrap ">
                <div className="flex items-center gap-x-[9.67px] ">
                  <img src={StarImg} alt="star img does not show" />
                  <img src={StarImg} alt="star img does not show" />
                  <img src={StarImg} alt="star img does not show" />
                  <img src={StarImg} alt="star img does not show" />
                  <img src={StarImg} alt="star img does not show" />
                </div>
                <div className="text-[13.19px] leading-[19.79px] text-[#4A4A4A] font-medium ">
                  <p>No reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-x-[19.08px] ">
                <h3 className="text-[18.17px] text-[#232323] leading-[27.26px] font-medium   ">
                  Availability:
                </h3>
                <GoCheck className="text-[#30BD57] w-6 h-6 " />
                <p className="text-[#30BD57] text-[18.17px] leading-[27.26px] font-medium text-nowrap  ">
                  In stock
                </p>
              </div>
              <p className="text-[15.93px] leading-[23.89px] text-[#5D5D5D] text-nowrap  ">
                Hurry up! only 34 product left in stock!
              </p>
            </div>

            <hr className="border border-[#BDBDBD] w-full my-[20px] " />

            <div className="flex flex-col gap-y-[26px]">
              <div className="flex items-center gap-x-[19.08px] ">
                <p className="text-[18.17px] text-[#232323] font-medium  ">
                  Color:
                </p>
                <span className="w-[18px] h-[18px] rounded-[50%] bg-[#D0EC48] "></span>
                <span className="w-[18px] h-[18px] rounded-[50%] bg-[#565656]  "></span>
              </div>
              <div className="flex items-center  flex-wrap  gap-x-[19.08px] max-md:gap-y-2.5   ">
                <p className="text-[18.17px] text-[#232323] leading-[27.26px] font-medium  ">
                  Size:
                </p>
                <p className="grid items-center w-[63px] h-[32px] bg-[#EEEEEE] ">
                  30
                </p>
                <p className="grid items-center w-[63px] h-[32px] bg-[#EEEEEE] ">
                  56
                </p>
                <p className="grid items-center w-[63px] h-[32px] bg-[#EEEEEE] ">
                  42
                </p>
                <p className="grid items-center w-[63px] h-[32px] bg-[#EEEEEE] ">
                  48
                </p>
              </div>
              <div className="flex items-center gap-x-[19.08px] ">
                <p className="text-[18.17px] text-[#232323] leading-[27.26px] font-medium   ">
                  Quantity:
                </p>
                <div className=" flex items-center ">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="grid place-items-center w-[35px] h-[32px] bg-[#EEEEEE] border border-[#BDBDBD]  "
                  >
                    -
                  </button>
                  <p className="grid place-items-center w-[63px] h-[32px] bg-[#EEEEEE] border border-[#BDBDBD] ">
                    {count}
                  </p>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="grid place-items-center w-[35px] h-[32px] bg-[#EEEEEE] border border-[#BDBDBD]  "
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-x-[29px] max-md:flex-col max-md:gap-y-[20px] ">
                <Button
                  content="Add to cart"
                  className="text-white text-[22.7px] bg-[#EDA415] px-[56px] py-[19.5px] leading-[34.05px] font-semibold rounded-[32.42px] text-nowrap max-md:w-full  "
                />
                <Button
                  content="Buy it now"
                  className="text-white text-[22.7px] bg-[#EDA415] px-[56px] py-[19.5px] leading-[34.05px] font-semibold rounded-[32.42px] text-nowrap "
                />
                <span className="bg-[#EEEEEE] w-[74px] h-[73px] rounded-[500px] grid place-items-center max-md:hidden  ">
                  <GoHeart className=" w-9 h-9 " />
                </span>
              </div>
            </div>

            <hr className="border border-[#BDBDBD] w-full my-[20px] " />

            <div className="flex flex-col gap-y-[31px]  ">
              <div className="flex items-center gap-x-[19px]  ">
                <p className="text-[18.17px] text-[#232323] leading-[27.26px] font-medium  ">
                  Sku:
                </p>
                <p className=" text-[18.17px] leading-[27.26px] text-[#434343] font-medium  ">
                  01133-9-9
                </p>
              </div>
              <div className="flex items-center gap-x-[13px]">
                <p className="text-[18.17px] text-[#232323] leading-[27.26px] font-medium  ">
                  Category:
                </p>
                <p className="text-[13.17px] text-[#434343] leading-[19.76px]  ">
                  20% off,
                </p>
                <p className="text-[13.17px] text-[#434343] leading-[19.76px]  ">
                  49% off
                </p>
                <p className="text-[13.17px] text-[#434343] leading-[19.76px]  ">
                  Alex remote
                </p>
              </div>

              <div className="flex items-center gap-x-[19px] ">
                <p className="text-[18.17px] text-[#232323] leading-[27.26px] font-medium">
                  Share:
                </p>
                <TbBrandGoogle className="w-6 h-6 text-[#3B3B3B] " />
                <RiFacebookCircleLine className="w-6 h-6 text-[#3B3B3B] " />
                <PiWhatsappLogo className="w-6 h-6 text-[#3B3B3B] " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-[20px] mb-[35px] mt-[70px] max-md:flex-col max-md:gap-y-5 max-md:my-[30px] ">
          <Button
            content="Description"
            className="w-[187px] h-[60px] text-[#373737] text-[20.68px] leading-[31.02px] font-medium rounded-[20px] border border-[#8F8F8F] "
          />
          <Button
            content="Reviews"
            className="w-[187px] h-[60px] bg-[#003F62] text-[20.68px] leading-[31.02px] font-medium text-white rounded-[20px]  "
          />
        </div>

        <div className="border border-[#B8B8B8] rounded-[20px] w-full h-[223px] flex flex-col justify-center gap-y-[17px] text-start px-[50px] mx-[50px] max-md:mx-[10px] max-md:px-[20px] ">
          <p className="text-[22.68px] text-[#003F62] leading-[34.02px] font-semibold  ">
            Customer reviews
          </p>
          <p className="text-[19.68px] text-[#4F4F4F] leading-[29.52px]  ">
            No reviews yet
          </p>
          <Button
            content="Write a review"
            className="bg-[#003F62] w-[196px] h-[40px] text-[19.68px] leading-[29.52px] text-white underline  "
          />
        </div>

        {/* <div className="flex flex-col justify-center items-center gap-y-[53px] my-[75px] w-full ">
          <h1 className="text-[#1B5A7D] text-[27.38px] leading-[41.07px] font-semibold text-start ">
            Related product
          </h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(308.83px,1fr))] justify-items-center w-full gap-[26.56px] ">
            <ProductCard className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col" />
            <ProductCard className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col" />
            <ProductCard className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col" />
            <ProductCard className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
