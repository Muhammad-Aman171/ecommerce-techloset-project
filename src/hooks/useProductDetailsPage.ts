import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "./useRedux.ts";

const useProductDetailsPage = () => {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const allProducts = useAppSelector((state) => state.productSlice.products);

  const product = allProducts.find((product) => product.id === Number(id));

  return {
    count,
    setCount,
    product,
  };
};

export default useProductDetailsPage;
