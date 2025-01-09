import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const HeaderSection3 = () => {
  return (
    <div>
      <div className="bg-[#F4F4F4] flex justify-center ">
        <div className=" font-poppins  flex justify-between basis-[1330px] items-center mx-[55px]  max-md:flex-col max-md:my-[20px] max-md:gap-y-2 ">
          <div className="flex basis-[800px] justify-between max-lg:basis-[400px] max-md:basis-0 ">
            <div className=" flex items-center bg-[#EDA415] text-white py-6 px-4 ">
              <Link
                to="/AllProducts"
                className="flex items-center bg-[#EDA415] "
              >
                <p className="  text-[16px] leading-6 font-medium text-nowrap ">
                  Browse categories
                </p>
                <IoIosArrowDown className="w-6 h-6 ml-4 font-thin " />
              </Link>
            </div>
            <div className="flex items-center gap-x-5  max-lg:hidden ">
              <span className="flex gap-x-3">
                <Link to="/" className=" flex gap-x-3">
                  <p className=" text-[16px] leading-6 font-medium text-[#3A3A3A] ">
                    Home
                  </p>
                  <IoIosArrowDown className="w-6 h-6 text-[#3A3A3A]  " />
                </Link>
              </span>
              <span className="flex gap-x-3">
                <p className=" text-[16px] leading-6 font-medium text-[#3A3A3A] ">
                  Catalog
                </p>
                <IoIosArrowDown className="w-6 h-6 text-[#3A3A3A] " />
              </span>
              <span>
                <p className=" text-[16px] leading-6 font-medium text-[#3A3A3A] ">
                  Blog
                </p>
              </span>
              <span className="flex gap-x-3">
                <p className=" text-[16px] leading-6 font-medium text-[#3A3A3A] ">
                  Pages
                </p>
                <IoIosArrowDown className="w-6 h-6 text-[#3A3A3A] " />
              </span>
              <span className="flex">
                <p className=" text-[16px] leading-6 font-medium text-[#3A3A3A] ">
                  About us
                </p>
              </span>
            </div>
          </div>
          <div className="basis-[200px] max-md:basis-0  ">
            <p className=" text-[#003F62] font-bold text-[16px] leading-6 text-nowrap  ">
              30 Days Free Return
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection3;
