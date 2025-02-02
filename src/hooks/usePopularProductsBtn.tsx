import React from "react";
import useAppDispatch from "./useAppDispatch";
import useAppSelector from "./useAppSelector";
import { filterByCategory } from "../store/slices/FilterCategoriesSlice";

const usePopularProductsBtn = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.productSlice.products);
  const status = useAppSelector((state) => state.productSlice.status);

  const handleFilter= (category: string) => {
    dispatch(filterByCategory({ category, products: allProducts }));
  };

  if (status === "loading") return <p>Loading...</p>;

  return {
    handleFilter,
  };
};

export default usePopularProductsBtn;
