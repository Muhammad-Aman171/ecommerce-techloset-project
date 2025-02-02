import Button from "../buttons/button.tsx";
import React from "react";
import { filterByCategory } from "../../store/slices/FilterCategoriesSlice.ts";
import {
  useAppSelector,
  useAppDispatch,
} from "../../hooks/useAppSelectorAndUseAppDispatch.tsx";
import { buttons } from "../../constant/ConstantsData.tsx";

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
        {buttons.map((buttonTitle, index) => (
          <Button
            key={index}
            label={buttonTitle.label}
            onClick={() => handleFilter(buttonTitle.value)}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] px-[30px] py-[10px] hover:bg-[#1B5A7D] hover:text-white   "
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
