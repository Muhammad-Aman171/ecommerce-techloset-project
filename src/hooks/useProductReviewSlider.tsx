import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "./useAppSelectorAndUseAppDispatch.tsx";
import { fetchProductInLimits } from "../store/slices/LimitProductsSlice.ts";

const useProductReviewSlider = () => {
  const dispatch = useAppDispatch();
  const limitProducts = useAppSelector(
    (state) => state.limitProductSlice.products
  );
  const status = useAppSelector((state) => state.limitProductSlice.status);
  const error = useAppSelector((state) => state.limitProductSlice.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductInLimits());
    }
  }, [dispatch, status]);

  return {
    limitProducts,
    status,
    error,
  };
};

export default useProductReviewSlider;
