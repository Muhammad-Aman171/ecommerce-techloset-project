import React from "react";
import HeroSection from "../components/homePage/HeroSection.tsx";
import ProductReviewSection from "../components/homePage/ProductReviewSection.tsx";
import PopularProductsBtns from "../components/homePage/PopularProductsBtns.tsx";
import PopularProductsCards from "../components/homePage/PopularProductsCards.tsx";
import LaptopSale from "../components/LaptopSale.tsx";
import ProductDetails from "../components/homePage/ProductDetails.tsx";
import FacilitiesSection from "../components/homePage/FacilitiesSection.tsx";
import MembersSection from "../components/homePage/MembersSection.tsx";
import OrganizationsSection from "../components/homePage/OrganizationsSection.tsx";
import LatestNewsSection from "../components/homePage/LatestNewsSection.tsx";
import UnFillCircle from "../components/slidersCircles/UnFillCircle.tsx";
import FillCircle from "../components/slidersCircles/FillCircle.tsx";

const Home: React.FC = () => {
  return (
    <div className="mx-auto  max-w-[1440px]">
      <div className="font-poppins flex flex-col justify-center items-center mx-[60px] max-md:mx-0 ">
        <HeroSection />
        <ProductReviewSection />
        <PopularProductsBtns />
        <PopularProductsCards />
        <div className="flex items-center gap-x-2.5 my-[50px] ">
          <FillCircle />
          <UnFillCircle />
          <UnFillCircle />
        </div>

        <LaptopSale />
        <ProductDetails />
        <FacilitiesSection />
        <MembersSection />
        <div className="flex items-center gap-x-2.5 my-[50px] ">
          <FillCircle />
          <UnFillCircle />
          <UnFillCircle />
        </div>
        <OrganizationsSection />
        <div className="flex items-center justify-between w-full m-6 max-md:justify-around ">
          <h1 className="text-[25.38px] text-[#1B5A7D] leading-[38.07px] font-bold  ">
            Latest news
          </h1>
          <h3 className="text-[20.38px] text-[#1B5A7D] leading-[30.57px] font-medium  ">
            View all
          </h3>
        </div>
        <LatestNewsSection />
        <div className="flex items-center gap-x-2.5 my-[50px] ">
          <FillCircle />
          <UnFillCircle />
        </div>
      </div>
    </div>
  );
};

export default Home;
