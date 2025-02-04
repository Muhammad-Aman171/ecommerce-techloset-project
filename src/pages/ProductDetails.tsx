import React from "react";
import StarImg from "../assets/imgs/star.png";
import Button from "../components/buttons/Button.tsx";
import { GoHeart } from "react-icons/go";
import { TbBrandGoogle } from "react-icons/tb";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiWhatsappLogo } from "react-icons/pi";
import { GoCheck } from "react-icons/go";
import useProductDetailsPage from "../hooks/useProductDetailsPage.ts";

const ProductDetails: React.FC = () => {
  const { count, setCount, product } = useProductDetailsPage();
  const stars = Array(5).fill(null);
  const size = [30, 56, 42, 48];

  const PRODUCT_DETAILS_BUTTON = [
    {
      content: "Add to cart",
      className:
        "text-white text-[22.7px] bg-primary px-[56px] py-[19.5px] leading-[34.05px] font-semibold rounded-[32.42px] text-nowrap max-md:w-full",
    },
    {
      content: "Buy it now",
      className:
        "text-white text-[22.7px] bg-primary px-[56px] py-[19.5px] leading-[34.05px] font-semibold rounded-[32.42px] text-nowrap ",
    },
  ];

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
              <h1 className="text-[29.68px] text-secoundTextColor leading-[44.51px] font-medium text-start text-nowrap ">
                {product.title.slice(0, 15) + "..."}
              </h1>
              <h2 className="text-[29.68px] text-fifthTextColor leading-[44.51px] font-semibold text-start text-nowrap ">
                {product.price}
              </h2>
              <div className="flex items-center gap-x-[9.67px] text-nowrap ">
                <div className="flex items-center gap-x-[9.67px] ">
                  {stars?.map((_, index) => (
                    <img
                      key={index}
                      src={StarImg}
                      alt="star img does not show"
                    />
                  ))}
                </div>
                <div className="text-[13.19px] leading-[19.79px] text-fifthTextColor font-medium ">
                  <p>No reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-x-[19.08px] ">
                <h3 className="text-[18.17px] text-thirdTextColor leading-[27.26px] font-medium   ">
                  Availability:
                </h3>
                <GoCheck className="text-twelveTextColor w-6 h-6 " />
                <p className="text-twelveTextColor text-[18.17px] leading-[27.26px] font-medium text-nowrap  ">
                  In stock
                </p>
              </div>
              <p className="text-[15.93px] leading-[23.89px] text-fifteenTextColor text-nowrap  ">
                Hurry up! only 34 product left in stock!
              </p>
            </div>

            <hr className="border border-secoundBorderColor w-full my-[20px] " />

            <div className="flex flex-col gap-y-[26px]">
              <div className="flex items-center gap-x-[19.08px] ">
                <p className="text-[18.17px] text-thirdTextColor font-medium  ">
                  Color:
                </p>
                <span className="w-[18px] h-[18px] rounded-[50%] bg-seventhBackgrounfColor "></span>
                <span className="w-[18px] h-[18px] rounded-[50%] bg-seventhBackgrounfColor  "></span>
              </div>
              <div className="flex items-center  flex-wrap  gap-x-[19.08px] max-md:gap-y-2.5   ">
                <p className="text-[18.17px] text-thirdTextColor leading-[27.26px] font-medium  ">
                  Size:
                </p>

                {size?.map((data, index) => (
                  <p
                    key={index}
                    className="grid items-center w-[63px] h-[32px] bg-ProductDetailsBgColor "
                  >
                    {data}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-x-[19.08px] ">
                <p className="text-[18.17px] text-thirdTextColor leading-[27.26px] font-medium   ">
                  Quantity:
                </p>
                <div className=" flex items-center ">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="grid place-items-center w-[35px] h-[32px] bg-ProductDetailsBgColor border border-secoundBorderColor  "
                  >
                    -
                  </button>
                  <p className="grid place-items-center w-[63px] h-[32px] bg-ProductDetailsBgColor border border-secoundBorderColor ">
                    {count}
                  </p>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="grid place-items-center w-[35px] h-[32px] bg-ProductDetailsBgColor border border-secoundBorderColor  "
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-x-[29px] max-md:flex-col max-md:gap-y-[20px] ">
                {PRODUCT_DETAILS_BUTTON?.map((data, index) => (
                  <Button
                    key={index}
                    content={data.content}
                    className={data.className}
                  />
                ))}
                <span className="bg-ProductDetailsBgColor w-[74px] h-[73px] rounded-[500px] grid place-items-center max-md:hidden  ">
                  <GoHeart className=" w-9 h-9 " />
                </span>
              </div>
            </div>

            <hr className="border border-secoundBorderColor w-full my-[20px] " />

            <div className="flex flex-col gap-y-[31px]  ">
              <div className="flex items-center gap-x-[19px]  ">
                <p className="text-[18.17px] text-thirdTextColor leading-[27.26px] font-medium  ">
                  Sku:
                </p>
                <p className=" text-[18.17px] leading-[27.26px] text-forthTextColor font-medium  ">
                  01133-9-9
                </p>
              </div>
              <div className="flex items-center gap-x-[13px]">
                <p className="text-[18.17px] text-thirdTextColor leading-[27.26px] font-medium  ">
                  Category:
                </p>
                <p className="text-[13.17px] text-forthTextColor leading-[19.76px]  ">
                  20% off,
                </p>
                <p className="text-[13.17px] text-forthTextColor leading-[19.76px]  ">
                  49% off
                </p>
                <p className="text-[13.17px] text-forthTextColor leading-[19.76px]  ">
                  Alex remote
                </p>
              </div>

              <div className="flex items-center gap-x-[19px] ">
                <p className="text-[18.17px] text-thirdTextColor leading-[27.26px] font-medium">
                  Share:
                </p>
                <TbBrandGoogle className="w-6 h-6 text-nineTextColor " />
                <RiFacebookCircleLine className="w-6 h-6 text-nineTextColor " />
                <PiWhatsappLogo className="w-6 h-6 text-nineTextColor " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-[20px] mb-[35px] mt-[70px] max-md:flex-col max-md:gap-y-5 max-md:my-[30px] ">
          <Button
            content="Description"
            className="w-[187px] h-[60px] text-eighteenTextColor text-[20.68px] leading-[31.02px] font-medium rounded-[20px] border border-twelveBorderColor "
          />
          <Button
            content="Reviews"
            className="w-[187px] h-[60px] bg-secoundTextColor text-[20.68px] leading-[31.02px] font-medium text-white rounded-[20px]  "
          />
        </div>

        <div className="border border-elevenBorderColor rounded-[20px] w-full h-[223px] flex flex-col justify-center gap-y-[17px] text-start px-[50px] mx-[50px] max-md:mx-[10px] max-md:px-[20px] ">
          <p className="text-[22.68px] text-secoundTextColor leading-[34.02px] font-semibold  ">
            Customer reviews
          </p>
          <p className="text-[19.68px] text-thirteenTextColor leading-[29.52px]  ">
            No reviews yet
          </p>
          <Button
            content="Write a review"
            className="bg-secoundTextColor w-[196px] h-[40px] text-[19.68px] leading-[29.52px] text-white underline  "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
