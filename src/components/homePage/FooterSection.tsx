import React from "react";
import Logo from "../../assets/imgs/logo-1 1.png";
import SendImg from "../../assets/imgs/send-2.png";
import HeadphoneImg from "../../assets/imgs/headphone.png";
import { TbBrandGoogle } from "react-icons/tb";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiWhatsappLogo } from "react-icons/pi";
import {
  ABOUT_US,
  GET_HELP,
  FIND_PRODUCT,
} from "../../constant/ConstantsData.ts";

const FooterSection: React.FC = () => {
  return (
    <div className="bg-backgroungColor py-[42px] ">
      <div className=" mx-[55px] max-md:mx-0 ">
        <div className=" bg-white mb-[41px] flex items-center justify-between gap-x-[20px] px-[20px] rounded-[20px] basis-[1330px] max-md:flex-col max-md:gap-y-3  ">
          <div className="max-md:mt-[14px]">
            <h1 className="text-[29.38px] text-textColor leading-[44.07px] font-bold text-nowrap   ">
              Subscribe newsletter
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-x-[10px] my-[38px] max-md:mb-[14px] max-md:mt-3 max-md:grid-cols-1 max-md:items-center  ">
            <div className="bg-primary flex items-center justify-between basis-[388px] py-[21px] px-[25px] rounded-[20px] col-span-2  max-md:h-[63px] max-md:w-[291px] max-sm:w-[250px]  ">
              <p className="text-[14px] leading-[21px] font-semibold text-white text-nowrap  ">
                Email address
              </p>
              <img
                src={SendImg}
                alt="Send img does not show"
                className="w-6 h-4 "
              />
            </div>
            <div className="flex items-center justify-center gap-x-[20px] max-md:mt-3 ">
              <img
                src={HeadphoneImg}
                alt="headphone img does not show"
                className="w-[45px] h-[45px]  "
              />
              <p className="text-start text-[14px] leading-[21px] text-elevenTextColor font-semibold text-nowrap ">
                Call us 24/7 : <br /> (+62) 0123 567 789
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-x-[40px] max-md:flex-col max-md:mx-[30px]  ">
          <div className="max-md:mb-6 ">
            <div className="mb-[41px] ">
              <img src={Logo} alt="logo does not show" />
            </div>
            <div className="flex flex-col items-start justify-between mb-[36px]  ">
              <p className="text-[16.38px] leading-[24.57px] text-textColor text-start  ">
                64 st james boulevard hoswick , ze2 7zj
              </p>
            </div>
            <hr className="border-[1px] h-[1px] border-tenBorderColor mb-[23px] " />
            <div className="flex max-md:gap-x-9  ">
              <span>
                <TbBrandGoogle className="w-6 h-6" />
              </span>
              <span>
                <RiFacebookCircleLine className="w-6 h-6" />
              </span>
              <span>
                <PiWhatsappLogo className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="flex justify-between flex-grow max-md:flex-col  max-md:gap-y-6  ">
            <div className="  flex flex-col items-start ">
              <h3 className="text-[19.38px] text-textColor leading-[29.07px] font-semibold mb-[13px] ">
                Find product
              </h3>
              <div className="flex flex-col gap-y-[10px] list-disc marker:text-footerSectionTextColor text-start ">
                {FIND_PRODUCT?.map((data, index) => (
                  <div
                    key={index}
                    className="flex gap-x-2.5 text-[19.38px] text-textColor leading-[29.07px] "
                  >
                    <span className="text-footerSectionTextColor font-extrabold ">
                      {data.bullets}
                    </span>
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="  flex flex-col items-start ">
              <h3 className="text-[19.38px] text-textColor leading-[29.07px] font-semibold mb-[13px] ">
                Get help
              </h3>
              <div className="flex flex-col gap-y-[10px] list-disc marker:text-footerSectionTextColor text-start ">
                {GET_HELP?.map((data, index) => (
                  <div
                    key={index}
                    className="flex gap-x-2.5 text-[19.38px] text-textColor leading-[29.07px] "
                  >
                    <span className="text-footerSectionTextColor font-extrabold ">
                      {data.bullets}
                    </span>
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="  flex flex-col items-start ">
              <h3 className="text-[19.38px] text-textColor leading-[29.07px] font-semibold mb-[13px] ">
                About us
              </h3>
              <div className="flex flex-col gap-y-[10px] list-disc marker:text-footerSectionTextColor text-start ">
                {ABOUT_US?.map((data, index) => (
                  <div
                    key={index}
                    className="flex gap-x-2.5 text-[19.38px] text-textColor leading-[29.07px] "
                  >
                    <span className="text-footerSectionTextColor font-extrabold ">
                      {data.bullets}
                    </span>
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
