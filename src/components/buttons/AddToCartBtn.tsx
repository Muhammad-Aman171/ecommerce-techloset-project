import React from "react";
import { BsCart3 } from "react-icons/bs";
import { AddToCartBtnProps } from "../../types/types";

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ id, onClick }) => {
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick(id!);
        } else {
          console.error("onClick function is not defined!");
        }
      }}
      className="bg-[#87BCD9] flex items-center justify-around w-[204px] h-[60px] rounded-[20px] hover:bg-[#a7d8f3]   "
    >
      <h1 className="text-[15.74px] leading-[23.6px] font-semibold text-[#272727]   ">
        {/* {count} */}
        Add to cart
      </h1>
      <div className=" bg-primary rounded-full w-[30px] h-[30px] flex items-center justify-center ">
        <BsCart3 className="text-white rounded-full w-[17px] h-[17px]  " />
      </div>
    </button>
  );
};

export default AddToCartBtn;
