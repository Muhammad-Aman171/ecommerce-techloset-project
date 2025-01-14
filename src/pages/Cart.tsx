import React from "react";
import Button from "../components/buttons/button.tsx";
import { GoChevronDown } from "react-icons/go";
import CartProductCard from "../components/CartProductCard.tsx";

const Cart = () => {


  return (
    <div className="flex justify-center ">
      <div>
        <div className="grid grid-cols-6 gap-x-2.5 mx-[60px] max-md:mx-[10px] max-xl:grid-cols-1 ">
          <div className="border  col-span-4  ">
            <div className="grid grid-cols-5 items-center bg-[#E2F4FF] h-[56px]  ">
              <div className="col-span-2 text-start">
                <h3 className="text-[20.68px] text-[#232323] leading-[31.02px] font-medium ">
                  Product
                </h3>
              </div>
              <div>
                <h3 className="text-[20.68px] text-[#232323] leading-[31.02px] font-medium ">
                  Price
                </h3>
              </div>
              <div>
                <h3 className="text-[20.68px] text-[#232323] leading-[31.02px] font-medium ">
                  Quantity
                </h3>
              </div>
              <div>
                <h3 className="text-[20.68px] text-[#232323] leading-[31.02px] font-medium ">
                  Subtotal
                </h3>
              </div>
            </div>
            <div>
                <CartProductCard />
            </div>
            <div className="flex gap-x-[60px] max-xl:flex-col max-xl:gap-y-[20px] max-xl:my-[50px]  ">
              <Button
                content="Continue shopping"
                className="text-white py-[19.5px] px-[37px] bg-[#EDA415] rounded-[32.42px] text-[22.7px] leading-[34.05px] font-semibold text-nowrap max-xl:w-full max-xl:px-3 "
              />
              <Button
                content="Update cart"
                className="border border-[#A9A9A9] rounded-[32.42px] py-[19.5px] px-[42px] text-[22.7px] leading-[34.05px] text-[#797979] font-semibold text-nowrap max-xl:w-full max-xl:px-3 "
              />
              <Button
                content="Clear cart"
                className="border border-[#C33131] rounded-[32.42px] py-[19.5px] px-[54px] text-[22.7px] text-[#C33131] leading-[34.05px] font-semibold text-nowrap max-xl:w-full max-xl:px-3 "
              />
            </div>
          </div>

          <div className="border border-yellow-700 col-span-2 max-xl:my-[50px] ">
            <h3 className="bg-[#E2F4FF] h-[56px] text-[20.68px] text-[#232323] leading-[31.02px] font-medium grid place-items-center text-nowrap ">
              Cart total
            </h3>
            <div className="px-[35px] py-[21px] flex flex-col gap-y-[20px] ">
              <div className="flex items-center justify-between ">
                <h4 className="text-[19.68px] text-[#232323] leading-[29.52px]  font-medium  ">
                  Subtotal
                </h4>
                <p className="text-[22.68px] leading-[34.02px] text-[#232323] font-medium ">
                  $ 23,20
                </p>
              </div>

              <hr className=" border border-[#AFAFAF]  " />

              <div className="border border-[#DFDFDF] px-[20px] py-[14px] rounded-[20px] flex items-center justify-between ">
                <h4 className="text-[16.68px] text-[#232323] leading-[25.02px] ">
                  Enter coupon code
                </h4>
                <h5 className="text-[14.68px] text-[#003F62] leading-[22.02px] font-medium ">
                  Apply
                </h5>
              </div>

              <hr className=" border border-[#AFAFAF]  " />

              <div className="border border-[#DFDFDF] px-[20px] py-[14px] rounded-[20px] flex items-center justify-between   ">
                <p className="text-[16.68px] leading-[25.02px] text-[#232323]  ">
                  County
                </p>
                <GoChevronDown className="w-6 h-6  " />
              </div>
              <div className="flex items-center justify-between ">
                <h4 className="text-[16.68px] text-[#232323] leading-[25.02px] ">
                  Total amount
                </h4>
                <h5 className="text-[18.68px] text-[#232323] leading-[25.02px]">
                  $ 23,20
                </h5>
              </div>
              <div className="bg-[#EDA415] px-[62px] py-[10px] rounded-[32.42px] text-white ">
                <p className="text-[20.7px] font-semibold leading-[31.05px] ">
                  Proceed to ckeckout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
