import React from "react";

interface ButtonPropsTypes {
  content?: string;
  className?: string;
  label?: string;
  category?: string;
  onClick?: (category?: string) => void;
}

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
