import React from "react";
import AddToCartBtn from "./AddToCartBtn.tsx";
import AddCartEye from "./AddCartEye.tsx";

interface ButtonsTypesProps {
  key?: number | undefined;
}

const AddToCartCard: React.FC<ButtonsTypesProps> = ({  key }) => {
  return (
    <div className="flex gap-x-3  ">
      <AddToCartBtn key={key} />
      <AddCartEye />
    </div>
  );
};

export default AddToCartCard;
