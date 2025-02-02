import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import MembersImg1 from "../../assets/imgs/organizersimg1.png";
import MembersImg2 from "../../assets/imgs/organizersimg2.png";
import MembersImg3 from "../../assets/imgs/organizersimg3.png";

const MembersSection = () => {
  return (
    <div className="flex justify-center items-center w-full mt-[55px] mx-[55px] ">
      <Swiper
      className="flex justify-center mx-[55px] "
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={window.innerWidth < 1980}
        slidesPerView={window.innerWidth < 1024 ? 1 : 3}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}
      >
        <SwiperSlide>
          <div className="border border-forthBorderColor rounded-[20px] py-[16.83px] pl-[16.83px] pr-[20.56px]  max-md:mx-[10px] max-md:py-[27px] max-md:px-[19px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-6">
            <div className="flex items-center gap-x-[37.39px] mb-[26px] max-md:flex-col max-md:gap-y-3 ">
              <div className="  ">
                <img src={MembersImg1} alt="Img does not show" />
              </div>
              <div>
                <h3 className="text-[15.98px] text-secoundTextColor leading-[23.97px] font-medium  ">
                  Esther Howard
                </h3>
              </div>
            </div>
            <div className="py-[11.13px] px-[26.64px] bg-[#E2F4FF] rounded-[20px] text-start   ">
              <p className="text-[13.17px] leading-[19.76px] text-secoundTextColor  ">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-forthBorderColor rounded-[20px] py-[16.83px] pl-[16.83px] pr-[20.56px] max-md:mx-[10px] max-md:py-[27px] max-md:px-[19px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-6 ">
            <div className="flex items-center gap-x-[37.39px] mb-[26px] max-md:flex-col max-md:gap-y-3 ">
              <div className="  ">
                <img src={MembersImg2} alt="Img does not show" />
              </div>
              <div>
                <h3 className="text-[15.98px] text-secoundTextColor leading-[23.97px] font-medium  ">
                  Gudai Howard
                </h3>
              </div>
            </div>
            <div className="py-[11.13px] px-[26.64px] bg-[#E2F4FF] rounded-[20px] text-start   ">
              <p className="text-[13.17px] leading-[19.76px] text-secoundTextColor  ">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-forthBorderColor rounded-[20px] py-[16.83px] pl-[16.83px] pr-[20.56px] max-md:mx-[10px] max-md:py-[27px] max-md:px-[19px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-6  ">
            <div className="flex items-center gap-x-[37.39px] mb-[26px] max-md:flex-col max-md:gap-y-3 ">
              <div className="  ">
                <img src={MembersImg3} alt="Img does not show" />
              </div>
              <div>
                <h3 className="text-[15.98px] text-secoundTextColor leading-[23.97px] font-medium  ">
                  Howard savan
                </h3>
              </div>
            </div>
            <div className="py-[11.13px] px-[26.64px] bg-[#E2F4FF] rounded-[20px] text-start   ">
              <p className="text-[13.17px] leading-[19.76px] text-secoundTextColor  ">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-forthBorderColor rounded-[20px] py-[16.83px] pl-[16.83px] pr-[20.56px] max-md:mx-[10px] max-md:py-[27px] max-md:px-[19px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-6 ">
            <div className="flex items-center gap-x-[37.39px] mb-[26px] max-md:flex-col max-md:gap-y-3 ">
              <div className="  ">
                <img src={MembersImg1} alt="Img does not show" />
              </div>
              <div>
                <h3 className="text-[15.98px] text-secoundTextColor leading-[23.97px] font-medium  ">
                  Consector Howard
                </h3>
              </div>
            </div>
            <div className="py-[11.13px] px-[26.64px] bg-[#E2F4FF] rounded-[20px] text-start   ">
              <p className="text-[13.17px] leading-[19.76px] text-secoundTextColor  ">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-forthBorderColor rounded-[20px] py-[16.83px] pl-[16.83px] pr-[20.56px] max-md:max-md:py-[27px] max-md:px-[19px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-6 ">
            <div className="flex items-center gap-x-[37.39px] mb-[26px] max-md:flex-col max-md:gap-y-3 ">
              <div className="  ">
                <img src={MembersImg2} alt="Img does not show" />
              </div>
              <div>
                <h3 className="text-[15.98px] text-secoundTextColor leading-[23.97px] font-medium  ">
                  Esther Howard
                </h3>
              </div>
            </div>
            <div className="py-[11.13px] px-[26.64px] bg-[#E2F4FF] rounded-[20px] text-start   ">
              <p className="text-[13.17px] leading-[19.76px] text-secoundTextColor  ">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-forthBorderColor rounded-[20px] py-[16.83px] pl-[16.83px] pr-[20.56px]  max-md:max-md:py-[27px] max-md:px-[19px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-6 ">
            <div className="flex items-center gap-x-[37.39px] mb-[26px] max-md:flex-col max-md:gap-y-3 ">
              <div className="  ">
                <img src={MembersImg3} alt="Img does not show" />
              </div>
              <div>
                <h3 className="text-[15.98px] text-secoundTextColor leading-[23.97px] font-medium  ">
                  Esther Howard
                </h3>
              </div>
            </div>
            <div className="py-[11.13px] px-[26.64px] bg-[#E2F4FF] rounded-[20px] text-start   ">
              <p className="text-[13.17px] leading-[19.76px] text-secoundTextColor  ">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MembersSection;
