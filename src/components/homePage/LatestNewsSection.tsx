import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination CSS
import "swiper/css/navigation"; // Navigation CSS
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import LatestNewsCard from "../LatestNewsCard.tsx";
import LatestProductImg1 from "../../assets/imgs/latestProductimg1.png";
import LatestProductImg2 from "../../assets/imgs/latestProductimg2.png";
import FillCircle from "../slidersCircles/FillCircle.tsx";
import UnFillCircle from "../slidersCircles/UnFillCircle.tsx";

const LatestNewsSection = () => {
  return (
    <div className=" my-10 mx-[55px] max-md:m-0  ">
      <div className="flex justify-between mt-20 mb-10 max-md:m-6  ">
        <h1 className="text-[25.38px] text-[#1B5A7D] leading-[38.07px] font-bold  ">
          Latest news
        </h1>
        <h3 className="text-[20.38px] text-[#1B5A7D] leading-[30.57px] font-medium  ">
          View all
        </h3>
      </div>
      <div className="flex gap-x-[20px] max-lg:hidden  ">
        <LatestNewsCard scrImg={LatestProductImg1} />
        <LatestNewsCard scrImg={LatestProductImg2} />
      </div>

      <div className="flex gap-x-[20px] lg:hidden ">
        <Swiper
          modules={[Navigation, Pagination]} // Enable Navigation and Pagination
          spaceBetween={30} // Gap between slides
          loop={window.innerWidth < 1024} // Sirf chhoti screen par loop enable karein
          slidesPerView={window.innerWidth < 1024 ? 1 : 2}
        >
          <SwiperSlide>
            <LatestNewsCard scrImg={LatestProductImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard scrImg={LatestProductImg2} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center gap-x-2.5 my-10">
        <FillCircle />
        <UnFillCircle />
      </div>
    </div>
  );
};

export default LatestNewsSection;
