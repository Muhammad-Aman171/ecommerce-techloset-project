import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "./useAppSelectorAndUseAppDispatch.tsx";
import { fetchProducts } from "../store/slices/ProductsSlice.ts";
import { addToCart } from "../store/slices/AddToCartSlice.ts";
import { selectFilteredProducts } from "../store/slices/FilterCategoriesSlice.ts";


const useProductCard = () => {
  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector(selectFilteredProducts);
  const products = useAppSelector((state) => state.productSlice.products);
  const status = useAppSelector((state) => state.productSlice.status);
  const error = useAppSelector((state) => state.productSlice.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);



  const handleAddToCart = (id: number) => {
    dispatch(addToCart({ id }));
  };

  const displayProduct =
    filteredProducts.length > 0 ? filteredProducts : products;

  return {
    handleAddToCart,
    filteredProducts,
    products,
    status,
    error,
    displayProduct,
  };
};

export default useProductCard;

// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "./useAppSelectorAndUseAppDispatch";
// import { fetchProducts } from "../store/slices/ProductsSlice";
// import { addToCart } from "../store/slices/AddToCartSlice";
// import { selectFilteredProducts } from "../store/slices/FilterCategoriesSlice";

// const useProductCard = () => {
//   const dispatch = useAppDispatch();
//   const filteredProducts = useAppSelector(selectFilteredProducts);
//   const products = useAppSelector((state) => state.productSlice.products);
//   const status = useAppSelector((state) => state.productSlice.status);
//   const error = useAppSelector((state) => state.productSlice.error);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchProducts());
//     }
//   }, [dispatch, status]);

//   const handleAddToCart = (id: number) => {
//     dispatch(addToCart({ id }));
//   };

//   const displayProduct = filteredProducts.length > 0 ? filteredProducts : products;

//   return {
//     handleAddToCart, // ✅ Ensure this is included
//     displayProduct,
//     status,
//     error,
//   };
// };

// export default useProductCard;
