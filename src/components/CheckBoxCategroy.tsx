import React from "react";

import { CheckBoxCategroyTypesProps } from "../types/types";


const CheckBoxCategroy: React.FC<CheckBoxCategroyTypesProps> = ({
  heading,
  number,
  value,
}) => {
  return (
    <div className="flex justify-between  ">
      <span className="flex gap-x-[10px] ">
        <input
          type="checkbox"
          value={value}
          className=" w-[30px] h-[30px] checked:text-[#E2F4FF] "
        />
        <h3 className="text-[16.09px] leading-[24.14px] text-[#222222] text-nowrap ">
          {heading}
        </h3>
      </span>
      <span className="text-[16.09px] leading-[24.14px] text-[#222222] ">
        {number}
      </span>
    </div>
  );
};

export default CheckBoxCategroy;
