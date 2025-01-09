import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import updateSelectedCategories from "../store/slices/FilterCategoriesSlice.ts";
import { RootState } from "../store/store.ts";

interface CheckBoxCategroyTypesProps {
  heading?: string;
  number?: string;
  value?: string;
}

const CheckBoxCategroy: React.FC<CheckBoxCategroyTypesProps> = ({
  heading,
  number,
  value,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const allProducts = useSelector(
    (state: RootState) => state.productSlice.products
  );
  // const filteredProducts = useSelector(filteredProducts);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const category = e.target.value;
  //   const isChecked = e.target.checked;

  //   dispatch(updateSelectedCategories({ category, isChecked }));
  //   dispatch(filterByCategory({ products: allProducts }));
  // };
  return (
    <div className="flex justify-between  ">
      <span className="flex gap-x-[10px] ">
        <input
          type="checkbox"
          value={value}
          // onChange={handleCheckboxChange}
          className=" w-[30px] h-[30px] checked:text-[#E2F4FF] "
        />
        <h3 className="text-[16.09px] leading-[24.14px] text-[#222222] text-nowrap ">
          {heading}
        </h3>
      </span>
      <span className="text-[16.09px] leading-[24.14px] text-[#222222] ">
        {number}
      </span>
    </div>
  );
};

export default CheckBoxCategroy;
