import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useProductReviewSlider from "../../hooks/useProductReviewSlider.ts";

const ProductReview: React.FC = () => {
  const { limitProducts, status, error } = useProductReviewSlider();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}
      >
        {limitProducts?.map((limitProduct) => (
          <SwiperSlide key={limitProduct.id}>
            <Link to={`/products/${limitProduct.id}`}>
              <div
                className={`  border border-borderColor grid grid-cols-2 place-items-center justify-center rounded-[20px] gap-x-[43.35px] px-[14px] h-[147px] max-w-[390px]  `}
              >
                <span className=" h-[130px] ">
                  <img
                    src={limitProduct.image}
                    alt="laptop product img does not show"
                    className="w-[110px] h-[130px] "
                  />
                </span>
                <div className=" my-[37px]  ">
                  <p className="text-[21.38px] font-semibold text-textColor leading-[32.07px] w-[170px] h-[30px]  ">
                    {limitProduct.title.slice(0, 10) + "..."}
                  </p>
                  <p className="text-[18.85px] text-seventeenTextColor leading-[28.27px]  font-medium ">
                    (6 items)
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductReview;
