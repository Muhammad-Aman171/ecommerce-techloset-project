import Button from "../buttons/button.tsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../store/slices/FilterCategoriesSlice.ts";
import { RootState, AppDispatch } from "../../store/store.ts";
import useAppDispatch from "../../hooks/useAppDispatch.tsx";
import useAppSelector from "../../hooks/useAppSelector.tsx";

const PopularProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.productSlice.products);
  const status = useAppSelector((state) => state.productSlice.status);

  const handleFilter = (category: string) => {
    dispatch(filterByCategory({ category, products: allProducts }));
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex justify-between w-full items-center mt-20 mb-[53px] gap-x-4 max-md:justify-center max-md:flex-col max-md:mx-auto max-md:my-10">
      <div className=" ">
        <h1 className="text-[27.38px] text-textColor leading-[41.07px] font-semibold text-nowrap  ">
          Popular products
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-3 ">
        <Button
          label="Electronics"
          onClick={() => handleFilter("electronics")}
          className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] px-[30px] py-[10px] hover:bg-[#1B5A7D] hover:text-white   "
        />
        <Button
          label="Jewelry"
          onClick={() => handleFilter("jewelery")}
          className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] px-[30px] py-[10px] hover:bg-[#1B5A7D] hover:text-white   "
        />
        <Button
          label="Men's Clothing"
          onClick={() => handleFilter("men's clothing")}
          className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] px-[30px] py-[10px] hover:bg-[#1B5A7D] hover:text-white  "
        />
        <Button
          label="Women's Clothing"
          onClick={() => handleFilter("women's clothing")}
          className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] px-[30px] py-[10px] hover:bg-[#1B5A7D] hover:text-white  "
        />
      </div>
    </div>
  );
};

export default PopularProducts;
