import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addToCart, removeFromCart } from "../store/slices/AddToCartSlice.ts";

const CartProductCard: React.FC = () => {
  const cartItems = useSelector(
    (state: RootState) => state.addToCartSlice.items
  );
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <div className="grid grid-cols-5 place-items-center ">
              <div className="border border-black col-span-2 flex items-center justify-around w-full my-[20px] ">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[80px] h-[80px] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 ">
                  <h3 className="text-[#003F62] text-[20.68px] leading-[31.02px] font-semibold  ">
                    {item.title}
                  </h3>
                  <p className="text-[#2F2F2F] text-[20.68px] leading-[31.02px]">
                    Color: Default
                  </p>
                  <p className="text-[#2F2F2F] text-[20.68px] leading-[31.02px] ">
                    Size: Default
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-[22.68px] leading-[34.02px] text-[#2F2F2F] ">
                  ${item.price.toFixed(2)}
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="border border-[#BDBDBD] bg-[#F2F2F2] w-[35px] h-[32px] grid place-items-center text-[#434343] "
                >
                  -
                </button>
                <span className="border border-[#BDBDBD] bg-[#F2F2F2] w-[63px] h-[32px] grid place-items-center text-[#434343]    ">
                  1
                </span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="border border-[#BDBDBD] bg-[#F2F2F2] w-[35px] h-[32px] grid place-items-center text-[#434343]"
                >
                  +
                </button>
              </div>
              <div>
                <h3 className="text-[22.68px] leading-[34.02px] text-[#2F2F2F] ">
                  ${(item.price * 1).toFixed(2)}
                </h3>
              </div>
            </div>
            <hr className="border border-[#C3C3C3] my-5 " />
          </div>
        ))
      ) : (
        <p className="text-center text-[20px] text-gray-500">Cart is empty!</p>
      )}
    </div>
  );
};

export default CartProductCard;
