import React, { useEffect } from "react";
import CheckBoxCategroy from "../CheckBoxCategroy.tsx";
import ProductCard from "../ProductCard.tsx";
import LaptopSale from "../LaptopSale.tsx";
import { fetchProducts } from "../../store/slices/ProductsSlice.ts";
import useAppDispatch from "../../hooks/useAppDispatch.tsx";
import useAppSelector from "../../hooks/useAppSelector.tsx";

const AllCategrories: React.FC = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.productSlice.status);
  const error = useAppSelector((state) => state.productSlice.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="flex justify-center  ">
      <div className=" flex justify-center ">
        <div className="grid grid-cols-4 mx-[64px] max-lg:flex  max-lg:flex-col  max-lg:justify-center  max-lg:mx-[10px] ">
          <div className="col-span-1 mr-[20px]  max-lg:col-span-2  max-lg:m-0  max-lg:mb-6  ">
            <div className="flex flex-col gap-y-3 mt-[20px]   ">
              <div className="flex justify-between   ">
                <h3 className="text-[#003F62] text-[16.09px] leading-[24.14px] font-medium ">
                  Categories
                </h3>
                <p className="text-[#595959] text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>

              <CheckBoxCategroy heading="All categories" number="10" />
              <CheckBoxCategroy heading="Tablet" number="5" />
              <CheckBoxCategroy heading="Laptop" number="5" />
              <CheckBoxCategroy heading="Headphones" number="5" />
              <CheckBoxCategroy heading="other" number="5" />

              <hr className=" border border-[#BDBDBD] " />
            </div>
            <div className="flex flex-col gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-[#003F62] text-[16.09px] leading-[24.14px] font-medium ">
                  Avaliability
                </h3>
                <p className="text-[#595959] text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="In stock" number="5" />
              <CheckBoxCategroy heading="Out of stock" number="0" />
              <hr className=" border border-[#BDBDBD] " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-[#003F62] text-[16.09px] leading-[24.14px] font-medium ">
                  Product type
                </h3>
                <p className="text-[#595959] text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="Smart-watch" number="5" />
              <hr className=" border border-[#BDBDBD] " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-[#003F62] text-[16.09px] leading-[24.14px] font-medium ">
                  Brand
                </h3>
                <p className="text-[#595959] text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="Smart-watch" number="5" />
              <hr className=" border border-[#BDBDBD] " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden ">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-[#003F62] text-[16.09px] leading-[24.14px] font-medium ">
                  Color
                </h3>
                <p className="text-[#595959] text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <div className="flex gap-x-6  ">
                <span className="w-[15px] h-[15px] bg-[#EDA415] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#E42424] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#1B5A7D] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#ACACAC] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#1D5F23] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#2E56A3] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#8131A7] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#BC2944] rounded-[50%] "></span>
                <span className="w-[15px] h-[15px] bg-[#9BC14C] rounded-[50%] "></span>
              </div>
              <hr className=" border border-[#BDBDBD] " />
            </div>
            <div className="flex flex-col  gap-y-3 mt-[20px] max-lg:hidden">
              {" "}
              <div className="flex justify-between   ">
                <h3 className="text-[#003F62] text-[16.09px] leading-[24.14px] font-medium ">
                  Size
                </h3>
                <p className="text-[#595959] text-[15.09px] leading-[22.64px]  ">
                  Reset
                </p>
              </div>
              <CheckBoxCategroy heading="M" number="5" />
              <CheckBoxCategroy heading="S" number="5" />
              <CheckBoxCategroy heading="X" number="5" />
              <CheckBoxCategroy heading="XX" number="5" />
              <hr className=" border border-[#BDBDBD] " />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(308.83px,1fr))] justify-items-center  justify-center items-center gap-[26px] col-span-3 mt-[50px] max-md:mt-[20px] ">
            <ProductCard className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col" />
          </div>
          <div className=" col-span-4 my-[20px] ">
            <LaptopSale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategrories;
