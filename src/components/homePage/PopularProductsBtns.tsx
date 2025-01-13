import Button from "../buttons/button.tsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../store/slices/FilterCategoriesSlice.ts";
import { RootState, AppDispatch } from "../../store/store.ts";

const PopularProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allProducts = useSelector(
    (state: RootState) => state.productSlice.products
  );
  const status = useSelector((state: RootState) => state.productSlice.status);

  const handleFilter = (category: string) => {
    dispatch(filterByCategory({ category, products: allProducts }));
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center my-20 mx-8 gap-x-4 max-md:justify-center max-md:flex-col max-md:mx-auto max-md:my-10">
        <div className="w-[250px] ">
          <h1 className="text-[27.38px] text-textColor leading-[41.07px] font-semibold text-nowrap  ">
            Popular products
          </h1>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-3 ">
          <Button
            label="Electronics"
            onClick={() => handleFilter("electronics")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
          <Button
            label="Jewelry"
            onClick={() => handleFilter("jewelery")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
          <Button
            label="Men's Clothing"
            onClick={() => handleFilter("men's clothing")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
          <Button
            label="Women's Clothing"
            onClick={() => handleFilter("women's clothing")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
