import React from "react";

const QuantityBtn = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setCount(count - 1)}
        className="border border-secoundBorderColor bg-fifthBorderColor w-[35px] h-[32px] grid place-items-center text-forthTextColor "
      >
        -
      </button>
      <span className="border border-secoundBorderColor bg-fifthBorderColor w-[63px] h-[32px] grid place-items-center text-forthTextColor    ">
        {count}
      </span>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-secoundBorderColor bg-fifthBorderColor w-[35px] h-[32px] grid place-items-center text-forthTextColor"
      >
        +
      </button>
    </div>
  );
};

export default QuantityBtn;
