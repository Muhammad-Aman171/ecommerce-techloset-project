import React from "react";
import AddCartEye from "./buttons/AddCartEye.tsx";
import AddToCartBtn from "./buttons/AddToCartBtn.tsx";
import { AiTwotoneStar } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import useProductCard from "../hooks/useProductCard.ts";
import { ProductCardTypesProps } from "../types/types.ts";

const ProductCard: React.FC<ProductCardTypesProps> = ({
  className,
  heartStyle,
}) => {
  const { handleAddToCart, displayProduct, status, error } = useProductCard();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {displayProduct?.map((product) => (
        <div key={product.id} className={`${className} group relative `}>
          <div className="flex justify-center ">
            <img
              src={product.image}
              alt="Camera img does not show"
              className="w-[154px] h-[154px] "
            />
            <span
              className={`${heartStyle} h-[27.54px] w-[27.54px] bg-[#B3D4E5] flex items-center justify-center rounded-full`}
            >
              <GoHeart />
            </span>
          </div>
          <div className="text-start absolute bottom-4 left-5 flex flex-col gap-y-3 group-hover:hidden duration-500">
            <p className="text-[17.09px] font-semibold text-secoundTextColor leading-[25.64px] mt-3 mb-[-10px]">
              {product.title?.slice(0, 8) + "..."}
            </p>
            <p className="text-fifthTextColor text-[17.09px] leading-[25.64px] font-semibold">
              {`$${product.price}`}
            </p>
            <div className="flex gap-x-1">
              <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
              <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
              <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
              <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
              <AiTwotoneStar className="w-[14.75px] h-[14.65px]" />
            </div>
          </div>
          <div className="opacity-0 absolute bottom-3 group-hover:opacity-100 duration-500">
            <div className="flex gap-x-3">
              <AddToCartBtn id={product.id} onClick={handleAddToCart} />
              <Link to={`/products/${product.id}`}>
                <AddCartEye />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
