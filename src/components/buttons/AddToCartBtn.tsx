import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addToCart } from "../../store/slices/AddToCartSlice.ts";
import { BsCart3 } from "react-icons/bs";

interface ButtonTypesProps {
  id?: number; // `id` is required to ensure proper functionality
  title?: string;
  price?: number;
  image?: string;
}
const AddToCartBtn: React.FC<ButtonTypesProps> = ({
  id,
  title,
  price,
  image,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    if (!id) {
      console.error("Product ID is missing!");
      return;
    }

    // Dispatching product details to Redux store
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
      })
    );

    console.log("Added to Cart:", { id, title, price, image });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-[#87BCD9] flex items-center justify-around w-[204px] h-[60px] rounded-[20px]  "
    >
      <h1 className="text-[15.74px] leading-[23.6px] font-semibold text-[#272727]   ">
        Add to cart
      </h1>
      <div className=" bg-[#EDA415] rounded-full w-[30px] h-[30px] flex items-center justify-center ">
        <BsCart3 className="text-white rounded-full w-[17px] h-[17px]  " />
      </div>
    </button>
  );
};

export default AddToCartBtn;
