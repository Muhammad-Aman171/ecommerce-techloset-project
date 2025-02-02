import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { fetchProductInLimits } from "../../store/slices/LimitProductsSlice.ts";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/useAppSelectorAndUseAppDispatch.tsx";
import { Link } from "react-router-dom";

const ProductReview: React.FC = () => {
  const dispatch = useAppDispatch();
  const limitProducts = useAppSelector(
    (state) => state.limitProductSlice.products
  );
  const status = useAppSelector((state) => state.limitProductSlice.status);
  const error = useAppSelector((state) => state.limitProductSlice.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductInLimits());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]} // Enable Navigation and Pagination
        spaceBetween={30} // Gap between slides
        slidesPerView={3} // Show 3 slides at a time
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}
      >
        {limitProducts.map((limitProduct) => (
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
                  <p className="text-[18.85px] text-[#265F7F] leading-[28.27px]  font-medium ">
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
