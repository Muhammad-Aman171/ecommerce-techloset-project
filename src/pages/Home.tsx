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
// import FilterCategories from "../components/FilterCategories.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <div className="font-poppins  flex flex-col justify-center ">
        <HeroSection />
        <ProductReviewSection />
        <PopularProductsBtns />
        {/* <FilterCategories /> */}
        <PopularProductsCards />
        <LaptopSale />
        <ProductDetails />
        <FacilitiesSection />
        <MembersSection />
        <OrganizationsSection />
        <LatestNewsSection />
      </div>
    </div>
  );
};

export default Home;
