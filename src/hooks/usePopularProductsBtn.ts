import { filterByCategory } from "../store/slices/FilterCategoriesSlice.ts";
import {
  useAppDispatch,
  useAppSelector,
} from "./useRedux.ts";

const usePopularProductsBtn = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.productSlice.products);
  const status = useAppSelector((state) => state.productSlice.status);

  const handleFilter = (category: string) => {
    dispatch(filterByCategory({ category, products: allProducts }));
  };

  return {
    handleFilter,
    status,
  };
};

export default usePopularProductsBtn;
