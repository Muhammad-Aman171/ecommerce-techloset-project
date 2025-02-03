import  { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "./useRedux.ts";
import { fetchProducts } from "../store/slices/ProductsSlice.ts";

const useAllCategrories = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.productSlice.status);
  const error = useAppSelector((state) => state.productSlice.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return {
    status,
    error,
  };
};

export default useAllCategrories;
