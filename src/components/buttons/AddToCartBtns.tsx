import React from "react";
import AddToCartBtn from "./AddToCartBtn.tsx";
import AddCartEye from "./AddCartEye.tsx";

const AddToCartCard: React.FC = () => {
  return (
    <div className="flex gap-x-3  ">
      <AddToCartBtn />
      <AddCartEye />
    </div>
  );
};

export default AddToCartCard;
