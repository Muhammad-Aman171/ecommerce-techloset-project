import Button from "../buttons/Button.tsx";
import React from "react";
import { BUTTONS } from "../../constant/ConstantsData.ts";
import usePopularProductsBtn from "../../hooks/usePopularProductsBtn.ts";

const PopularProducts: React.FC = () => {
  const { handleFilter, status } = usePopularProductsBtn();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex justify-between w-full items-center mt-20 mb-[53px] gap-x-4 max-md:justify-center max-md:flex-col max-md:mx-auto max-md:my-10">
      <div className=" ">
        <h1 className="text-[27.38px] text-textColor leading-[41.07px] font-semibold text-nowrap  ">
          Popular products
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-3 ">
        {BUTTONS?.map((buttonTitle, index) => (
          <Button
            key={index}
            label={buttonTitle.label}
            onClick={() => handleFilter(buttonTitle.value)}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] px-[30px] py-[10px] hover:bg-textColor hover:text-white   "
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
