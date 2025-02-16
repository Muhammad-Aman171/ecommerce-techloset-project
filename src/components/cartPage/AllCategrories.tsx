import React from "react";
import CheckBoxCategroy from "../CheckBoxCategroy.tsx";
import ProductCard from "../ProductCard.tsx";
import LaptopSale from "../LaptopSale.tsx";
import useAllCategrories from "../../hooks/useAllCategrories.ts";

const AllCategrories: React.FC = () => {
  const { status, error } = useAllCategrories();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="flex justify-center  ">
      <div className=" flex justify-center ">
        <div className="grid grid-cols-4 mx-[64px] max-lg:flex  max-lg:flex-col  max-lg:justify-center  max-lg:mx-[10px] ">
          <div className="col-span-1 mr-[20px]  max-lg:col-span-2  max-lg:m-0  max-lg:mb-6  ">
            <div className="flex flex-col gap-y-3 mt-[20px]   ">
              <div className="flex justify-between   ">
                <h3 className="text-secoundTextColor text-[16.09px] leading-[24.14px] font-medium ">
                  Categories
                </h3>
                <p className="text-allCategroriesTextColor text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>

              <CheckBoxCategroy heading="All categories" number="10" />
              <CheckBoxCategroy heading="Tablet" number="5" />
              <CheckBoxCategroy heading="Laptop" number="5" />
              <CheckBoxCategroy heading="Headphones" number="5" />
              <CheckBoxCategroy heading="other" number="5" />

              <hr className=" border border-secoundBorderColor " />
            </div>
            <div className="flex flex-col gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-secoundTextColor text-[16.09px] leading-[24.14px] font-medium ">
                  Avaliability
                </h3>
                <p className="text-allCategroriesTextColor text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="In stock" number="5" />
              <CheckBoxCategroy heading="Out of stock" number="0" />
              <hr className=" border border-secoundBorderColor " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-secoundTextColor text-[16.09px] leading-[24.14px] font-medium ">
                  Product type
                </h3>
                <p className="text-allCategroriesTextColor text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="Smart-watch" number="5" />
              <hr className=" border border-secoundBorderColor " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-secoundTextColor text-[16.09px] leading-[24.14px] font-medium ">
                  Brand
                </h3>
                <p className="text-allCategroriesTextColor text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="Smart-watch" number="5" />
              <hr className=" border border-secoundBorderColor " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-secoundTextColor text-[16.09px] leading-[24.14px] font-medium ">
                  Color
                </h3>
                <p className="text-allCategroriesTextColor text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <div className="flex gap-x-6  ">
                <span className="w-[15px] h-[15px] bg-primary rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-eightBackgrounfColor rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-textColor rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-sixthBackgroundColor rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-nineBackgrounfColor rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-tenBackgrounfColor rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-elevenBackgrounfColor rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-fifthBackgroundColor rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-twelveBackgrounfColor rounded-[50%] "></span>
              </div>
              <hr className=" border border-secoundBorderColor " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden">
              <div className="flex justify-between   ">
                <h3 className="text-secoundTextColor text-[16.09px] leading-[24.14px] font-medium ">
                  Size
                </h3>
                <p className="text-allCategroriesTextColor text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="M" number="5" />
              <CheckBoxCategroy heading="S" number="5" />
              <CheckBoxCategroy heading="X" number="5" />
              <CheckBoxCategroy heading="XX" number="5" />
              <hr className=" border border-secoundBorderColor " />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(308.83px,1fr))] justify-items-center  justify-center items-center gap-[26px] col-span-3 mt-[50px] max-md:mt-[20px] ">
            <ProductCard className="border border-thirdBorderColor rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col" />
          </div>
          <div className=" col-span-4 my-[20px] ">
            <LaptopSale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategrories;
