import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import LatestProductImg1 from "../../assets/imgs/latestProductimg1.png";
import LatestProductImg2 from "../../assets/imgs/latestProductimg2.png";

const LatestNewsSection = () => {
  return (
    <div className="flex items-center gap-x-[20px]  w-full">
      <Swiper        
        modules={[Navigation, Pagination]} 
        spaceBetween={30} 
        loop={window.innerWidth < 2000}
        slidesPerView={window.innerWidth < 1024 ? 1 : 2}
      >
        <SwiperSlide>
          <div className=" border border-[#C8C8C8] grid grid-cols-2 items-center px-[16.5px] gap-x-[34px] rounded-[20px] max-md:grid-cols-1 max-md:justify-center max-md:mx-[17px]  ">
            <div className="max-md:mt-3 max-md:flex max-md:justify-center ">
              <img src={LatestProductImg1} alt="Latest img does not show" />
            </div>
            <div className="py-[34.5px] flex flex-col items-start   ">
              <h3 className="border border-[#C8C8C8] py-[5px] px-[18.5px] text-[#1B5A7D] text-[20.38px] leading-[30.57px] font-medium rounded-[20px] mb-2.5 ">
                22,oct,2021
              </h3>
              <h1 className=" text-[22.38px] text-[#1B5A7D] leading-[33.57px] font-semibold text-start ">
                Who avoids a <br />
                pain that produces?
              </h1>
              <p
                className="text-[#003F62] text-[13.17px] leading-[19.76px] text-start mt-[19px]
        mb-[43px] max-md:mb-4  "
              >
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
              <p className=" text-[#003F62] text-[13.17px] leading-[19.76px]   ">
                By spacing tech
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-[#C8C8C8] grid grid-cols-2 items-center px-[16.5px] gap-x-[34px] rounded-[20px] max-md:grid-cols-1 max-md:justify-center max-md:mx-[17px]  ">
            <div className="max-md:mt-3 max-md:flex max-md:justify-center ">
              <img src={LatestProductImg2} alt="Latest img does not show" />
            </div>
            <div className="py-[34.5px] flex flex-col items-start   ">
              <h3 className="border border-[#C8C8C8] py-[5px] px-[18.5px] text-[#1B5A7D] text-[20.38px] leading-[30.57px] font-medium rounded-[20px] mb-2.5 ">
                22,oct,2021
              </h3>
              <h1 className=" text-[22.38px] text-[#1B5A7D] leading-[33.57px] font-semibold text-start ">
                Who avoids a <br />
                pain that produces?
              </h1>
              <p
                className="text-[#003F62] text-[13.17px] leading-[19.76px] text-start mt-[19px]
        mb-[43px] max-md:mb-4  "
              >
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
              <p className=" text-[#003F62] text-[13.17px] leading-[19.76px]   ">
                By spacing tech
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-[#C8C8C8] grid grid-cols-2 items-center px-[16.5px] gap-x-[34px] rounded-[20px] max-md:grid-cols-1 max-md:justify-center max-md:mx-[17px]  ">
            <div className="max-md:mt-3 max-md:flex max-md:justify-center ">
              <img src={LatestProductImg1} alt="Latest img does not show" />
            </div>
            <div className="py-[34.5px] flex flex-col items-start   ">
              <h3 className="border border-[#C8C8C8] py-[5px] px-[18.5px] text-[#1B5A7D] text-[20.38px] leading-[30.57px] font-medium rounded-[20px] mb-2.5 ">
                22,oct,2021
              </h3>
              <h1 className=" text-[22.38px] text-[#1B5A7D] leading-[33.57px] font-semibold text-start ">
                Who avoids a <br />
                pain that produces?
              </h1>
              <p
                className="text-[#003F62] text-[13.17px] leading-[19.76px] text-start mt-[19px]
        mb-[43px] max-md:mb-4  "
              >
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
              <p className=" text-[#003F62] text-[13.17px] leading-[19.76px]   ">
                By spacing tech
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-[#C8C8C8] grid grid-cols-2 items-center px-[16.5px] gap-x-[34px] rounded-[20px] max-md:grid-cols-1 max-md:justify-center max-md:mx-[17px]  ">
            <div className="max-md:mt-3 max-md:flex max-md:justify-center ">
              <img src={LatestProductImg2} alt="Latest img does not show" />
            </div>
            <div className="py-[34.5px] flex flex-col items-start   ">
              <h3 className="border border-[#C8C8C8] py-[5px] px-[18.5px] text-[#1B5A7D] text-[20.38px] leading-[30.57px] font-medium rounded-[20px] mb-2.5 ">
                22,oct,2021
              </h3>
              <h1 className=" text-[22.38px] text-[#1B5A7D] leading-[33.57px] font-semibold text-start ">
                Who avoids a <br />
                pain that produces?
              </h1>
              <p
                className="text-[#003F62] text-[13.17px] leading-[19.76px] text-start mt-[19px]
        mb-[43px] max-md:mb-4  "
              >
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
              <p className=" text-[#003F62] text-[13.17px] leading-[19.76px]   ">
                By spacing tech
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LatestNewsSection;
