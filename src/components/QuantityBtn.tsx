import React from "react";

const QuantityBtn = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setCount(count - 1)}
        className="border border-[#BDBDBD] bg-[#F2F2F2] w-[35px] h-[32px] grid place-items-center text-[#434343] "
      >
        -
      </button>
      <span className="border border-[#BDBDBD] bg-[#F2F2F2] w-[63px] h-[32px] grid place-items-center text-[#434343]    ">
        {count}
      </span>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-[#BDBDBD] bg-[#F2F2F2] w-[35px] h-[32px] grid place-items-center text-[#434343]"
      >
        +
      </button>
    </div>
  );
};

export default QuantityBtn;
