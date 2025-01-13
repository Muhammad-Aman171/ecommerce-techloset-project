import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

const HeaderSection1: React.FC = () => {
  return (
    <div>
      <div className=" font-poppins  flex justify-center ">
        <div className="  flex justify-between  basis-[1330px] h-[75px] mx-[55px]  max-md:flex-col max-md:h-[85px] max-md:justify-center max-md:items-center max-md:mx-0  ">
          <div className=" flex items-center">
            <h4 className="text-[#292D32] text-[14px] leading-[21px] text-nowrap ">
              Need help? Call us: (98+) 0234 456 789
            </h4>
          </div>
          <div className="flex">
            <div className="flex items-center m-[18px] ">
              <span>
                <CiLocationOn className="   w-6 h-6 mr-5 " />
              </span>
              <p className="text-[14px] leading-[21px] font-normal text-nowrap  ">
                Our Store
              </p>
            </div>
            <div className="flex items-center m-[18px] max-md:mx-5 ">
              <span>
                <CiDeliveryTruck className="w-6 h-6 mr-5 " />
              </span>
              <p className="text-[14px] leading-[21px] font-normal text-nowrap ">
                Track your order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection1;
