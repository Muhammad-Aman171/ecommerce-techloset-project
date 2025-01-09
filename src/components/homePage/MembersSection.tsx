import React from "react";
import MembersCard from "../MembersCard.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination CSS
import "swiper/css/navigation"; // Navigation CSS
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import MembersImg1 from "../../assets/imgs/organizersimg1.png";
import MembersImg2 from "../../assets/imgs/organizersimg2.png";
import MembersImg3 from "../../assets/imgs/organizersimg3.png";
import UnFillCircle from "../slidersCircles/UnFillCircle.tsx";
import FillCircle from "../slidersCircles/FillCircle.tsx";

const MembersSection = () => {
  return (
    <div className="my-20 mx-[55px] max-md:mx-[32px] max-md:my-6 ">
      <div className="  flex gap-x-2.5 my-10  max-lg:hidden ">
        <MembersCard scrImg={MembersImg1} name="Savannah Nguyen" />
        <MembersCard scrImg={MembersImg2} name="Esther Howard" />
        <MembersCard scrImg={MembersImg3} name="Esther Howard" />
      </div>
      <div className="flex gap-x-2.5 my-10 lg:hidden  ">
        <Swiper
          modules={[Navigation, Pagination]} // Enable Navigation and Pagination
          spaceBetween={30} // Gap between slides
          loop={window.innerWidth < 1024} // Sirf chhoti screen par loop enable karein
          slidesPerView={window.innerWidth < 1024 ? 1 : 3}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          <SwiperSlide>
            <MembersCard scrImg={MembersImg1} name="Savannah Nguyen" />
          </SwiperSlide>
          <SwiperSlide>
            <MembersCard scrImg={MembersImg2} name="Esther Howard" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <MembersCard scrImg={MembersImg3} name="Esther Howard" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex gap-x-2.5 justify-center max-md:hidden  ">
        <FillCircle />
        <UnFillCircle />
        <UnFillCircle />
      </div>
    </div>
  );
};

export default MembersSection;
