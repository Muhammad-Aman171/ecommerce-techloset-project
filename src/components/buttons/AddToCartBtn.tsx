import React from "react";
import { BsCart3 } from "react-icons/bs";

interface AddToCartBtnProps {
  id?: number; // Product ID
  onClick?: (id: number) => void; // Function to handle click
}
const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ id, onClick }) => {

  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick(id!); // Here, we assert that id is not undefined
        } else {
          console.error("onClick function is not defined!");
        }
      }}
      className="bg-[#87BCD9] flex items-center justify-around w-[204px] h-[60px] rounded-[20px]  "
    >
      <h1 className="text-[15.74px] leading-[23.6px] font-semibold text-[#272727]   ">
        {/* {count} */}
        Add to cart
      </h1>
      <div className=" bg-[#EDA415] rounded-full w-[30px] h-[30px] flex items-center justify-center ">
        <BsCart3 className="text-white rounded-full w-[17px] h-[17px]  " />
      </div>
    </button>
  );
};

export default AddToCartBtn;
