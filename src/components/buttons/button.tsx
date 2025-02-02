import React from "react";
import { ButtonPropsTypes } from "../../types/types";

const Button: React.FC<ButtonPropsTypes> = ({
  label,
  content,
  className,
  category,
  onClick,
}) => {
  return (
    <div>
      <button onClick={() => onClick?.(category)} className={className}>
        {label}
        {content}
      </button>
    </div>
  );
};

export default Button;
