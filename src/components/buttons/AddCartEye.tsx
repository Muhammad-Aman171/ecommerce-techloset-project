import React from "react";
import { FiEye } from "react-icons/fi";
import { AddCartEyeTypesProps } from "../../types/types";


const AddCartEye: React.FC<AddCartEyeTypesProps> = ({ className }) => {
  return (
    <div
      className={` ${className} bg-[#87BCD9] w-[70px] h-[60px] flex items-center justify-center rounded-[20px] hover:bg-[#a7d8f3]  `}
    >
      <FiEye className="w-[23.6px] h-[23.6px] text-[#292D32] " />
    </div>
  );
};

export default AddCartEye;
