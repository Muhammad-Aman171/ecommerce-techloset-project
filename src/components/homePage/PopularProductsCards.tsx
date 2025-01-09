import React, { useEffect } from "react";
import ProductCard from "../ProductCard.tsx";
import { selectFilteredProducts } from "../../store/slices/FilterCategoriesSlice.ts";
import { fetchProducts } from "../../store/slices/ProductsSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.ts";
import { Link } from "react-router-dom";

const PopularProductsCards: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filteredProducts = useSelector(selectFilteredProducts);
  const products = useSelector(
    (state: RootState) => state.productSlice.products
  );
  const status = useSelector((state: RootState) => state.productSlice.status);
  const error = useSelector((state: RootState) => state.productSlice.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  const displayProduct =
    filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(308.83px,1fr))] justify-items-center  justify-center items-center gap-[26px] my-20 mx-[55px] ">
      {displayProduct.map((product) => (
        <Link to={`/products/${product.id}`}>
          <ProductCard
            className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col"
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        </Link>
      ))}

      {/* <ProductCard/> */}
    </div>
  );
};

export default PopularProductsCards;
