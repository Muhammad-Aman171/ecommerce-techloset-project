import React from "react";
import Button from "../components/buttons/Button.tsx";
import { GoChevronDown } from "react-icons/go";
import CartProductCard from "../components/CartProductCard.tsx";
import { clearCart } from "../store/slices/AddToCartSlice.ts";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/useRedux.ts";

const Cart = () => {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center ">
      <div className="mt-[30px]  w-[1440px] ">
        <div className="grid grid-cols-6 gap-x-2.5 mx-[60px] max-md:mx-[10px] max-xl:grid-cols-1 ">
          <div className="col-span-4 max-xl:col-span-1 ">
            <div className="grid grid-cols-5 items-center bg-backgroungColor h-[56px] max-md:grid-cols-3    ">
              <div className="col-span-2 text-start max-md:col-span-1 ">
                <h3 className="text-[20.68px] text-thirdTextColor leading-[31.02px] font-medium ml-2 ">
                  Product
                </h3>
              </div>
              <div>
                <h3 className="text-[20.68px] text-thirdTextColor leading-[31.02px] font-medium ">
                  Price
                </h3>
              </div>
              <div className="max-md:hidden ">
                <h3 className="text-[20.68px] text-thirdTextColor leading-[31.02px] font-medium ">
                  Quantity
                </h3>
              </div>
              <div>
                <h3 className="text-[20.68px] text-thirdTextColor leading-[31.02px] font-medium ">
                  Remove
                </h3>
              </div>
            </div>
            <div>
              <CartProductCard />
            </div>
            <div className="flex gap-x-[60px] max-xl:flex-col max-xl:gap-y-[20px] max-xl:my-[50px]  ">
              <Link to="/">
                <Button
                  content="Continue shopping"
                  className="text-white py-[19.5px] px-[37px] bg-primary rounded-[32.42px] text-[22.7px] leading-[34.05px] font-semibold text-nowrap max-xl:w-full max-xl:px-3 hover:text-primary hover:bg-white hover:border hover:border-primary    "
                />
              </Link>
              <Button
                content="Update cart"
                className="border border-eightBorderColor rounded-[32.42px] py-[19.5px] px-[42px] text-[22.7px] leading-[34.05px] text-sixteenTextColor font-semibold text-nowrap max-xl:w-full max-xl:px-3 hover:text-white hover:bg-eightBorderColor "
              />
              <Button
                onClick={handleClearCart}
                content="Clear cart"
                className="border border-sixthTextColor rounded-[32.42px] py-[19.5px] px-[54px] text-[22.7px] text-sixthTextColor leading-[34.05px] font-semibold text-nowrap max-xl:w-full max-xl:px-3   hover:text-white hover:bg-sixthTextColor hover:border hover:border-sixthTextColor "
              />
            </div>
          </div>

          <div className="border border-yellow-700 col-span-2 max-xl:my-[50px] max-xl:col-span-1  ">
            <h3 className="bg-backgroungColor h-[56px] text-[20.68px] text-thirdTextColor leading-[31.02px] font-medium grid place-items-center text-nowrap ">
              Cart total
            </h3>
            <div className="px-[35px] py-[21px] flex flex-col gap-y-[20px] ">
              <div className="flex items-center justify-between ">
                <h4 className="text-[19.68px] text-thirdTextColor leading-[29.52px]  font-medium  ">
                  Subtotal
                </h4>
                <p className="text-[22.68px] leading-[34.02px] text-thirdTextColor font-medium ">
                  $ 23,20
                </p>
              </div>

              <hr className=" border border-sicthBorderColor  " />

              <div className="border border-nineBorderColor px-[20px] py-[14px] rounded-[20px] flex items-center justify-between ">
                <h4 className="text-[16.68px] text-thirdTextColor leading-[25.02px] ">
                  Enter coupon code
                </h4>
                <h5 className="text-[14.68px] text-secoundTextColor leading-[22.02px] font-medium ">
                  Apply
                </h5>
              </div>

              <hr className=" border border-sicthBorderColor  " />

              <div className="border border-nineBorderColor px-[20px] py-[14px] rounded-[20px] flex items-center justify-between   ">
                <p className="text-[16.68px] leading-[25.02px] text-thirdTextColor  ">
                  County
                </p>
                <GoChevronDown className="w-6 h-6  " />
              </div>
              <div className="flex items-center justify-between ">
                <h4 className="text-[16.68px] text-thirdTextColor leading-[25.02px] ">
                  Total amount
                </h4>
                <h5 className="text-[18.68px] text-thirdTextColor leading-[25.02px]">
                  $ 23,20
                </h5>
              </div>
              <div className="bg-primary px-[62px] py-[10px] rounded-[32.42px] text-white hover:text-primary hover:bg-white hover:border hover:border-primary ">
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
