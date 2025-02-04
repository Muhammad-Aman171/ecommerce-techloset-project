import React from "react";
import { NumberCircleTypesProps } from "../../types/types";

const NumberCircle: React.FC<NumberCircleTypesProps> = ({ content }) => {
  return (
    <div className="bg-backgroungColor h-[78px] w-[77px] rounded-[500px] text-primary flex items-center justify-center text-[22.09px] font-bold">
      {content}
    </div>
  );
};

export default NumberCircle;
