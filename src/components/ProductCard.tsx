import React, { useEffect } from "react";
// import AddToCartBtns from "./buttons/AddToCartBtns.tsx";
import AddCartEye from "./buttons/AddCartEye.tsx";
import AddToCartBtn from "./buttons/AddToCartBtn.tsx";
import { AiTwotoneStar } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store.ts";
import { addToCart } from "../store/slices/AddToCartSlice.ts";
import { selectFilteredProducts } from "../store/slices/FilterCategoriesSlice.ts";
import { fetchProducts } from "../store/slices/ProductsSlice.ts";
import { Link } from "react-router-dom";

interface ProductCardTypesProps {
  className?: string;
  heartStyle?: string;
  id?: number | undefined;
  title?: string;
  price?: number;
  image?: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardTypesProps> = ({
  className,
  heartStyle,
  id,
  title,
  price,
  image,
  // onClick,
}) => {
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
    <>
      {displayProduct.map((product) => (
        <>
          <div key={product.id} className={`${className} group relative `}>
            <div className="flex justify-center ">
              <img
                src={product.image}
                alt="Camera img does not show  "
                className="w-[154px] h-[154px] "
              />
              <span
                className={`${heartStyle} h-[27.54px] w-[27.54px] bg-[#B3D4E5] flex items-center justify-center rounded-full`}
              >
                <GoHeart />
              </span>
            </div>
            <div className=" text-start absolute bottom-4 left-5 flex flex-col gap-y-3  group-hover:hidden duration-500 ">
              <p className="text-[17.09px] font-semibold text-[#003F62] leading-[25.64px] mt-3 mb-[-10px]  ">
                {product.title?.slice(0, 8) + "..."}
              </p>
              <p className="text-[#4A4A4A] text-[17.09px] leading-[25.64px] font-semibold  ">
                {` $${product.price}`}
              </p>
              <div className="flex gap-x-1 ">
                <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
                <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
                <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
                <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
                <AiTwotoneStar className="w-[14.75px] h-[14.65px]  " />
              </div>
            </div>
            <div className=" opacity-0 absolute bottom-3 group-hover:opacity-100 duration-500 ">
              <div className="flex gap-x-3">
                <AddToCartBtn />
                <Link to={`/products/${product.id}`}>
                  <AddCartEye />
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ProductCard;
