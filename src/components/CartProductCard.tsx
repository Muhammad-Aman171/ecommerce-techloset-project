import React from "react";
import { removeFromCart } from "../store/slices/AddToCartSlice.ts";
import QuantityBtn from "./QuantityBtn.tsx";
import { RxCrossCircled } from "react-icons/rx";
import {
  useAppDispatch,
  useAppSelector,
} from "../hooks/useAppSelectorAndUseAppDispatch.tsx";

const CartProductCard: React.FC = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.addToCartSlice.items);

  const products = useAppSelector((state) => state.productSlice.products);

  const cartProducts = cartItems
    ?.map((cartItem: { id }) =>
      products.find((product) => product.id === cartItem.id)
    )
    .filter((product) => product !== undefined);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  if (cartProducts.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  return (
    <div>
      {cartProducts?.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-5 place-items-center max-md:grid-cols-3  "
        >
          <div className="col-span-2 flex items-center justify-around gap-x-[21px] w-full my-[20px] max-md:col-span-1  ">
            <div>
              <img
                src={product.image}
                alt="game play img does not show"
                className="w-[136px] h-[119px]"
              />
            </div>
            <div className="flex flex-col gap-y-2.5 max-md:hidden ">
              <h3 className="text-secoundTextColor text-[20.68px] leading-[31.02px] font-semibold  ">
                {product.title.slice(0, 7) + "..."}
              </h3>
              <p className="text-cartProductCardTextColor text-[20.68px] leading-[31.02px]">
                Color: Green
              </p>
              <p className="text-cartProductCardTextColor text-[20.68px] leading-[31.02px] ">
                Size: 30
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[22.68px] leading-[34.02px] text-cartProductCardTextColor ">
              ${product.price}
            </h3>
          </div>
          <div className="flex items-center justify-center max-md:hidden ">
            <QuantityBtn />
          </div>
          <div>
            <h3 className="text-[22.68px] leading-[34.02px] text-cartProductCardTextColor hover:text-red-700 ">
              <button onClick={() => handleRemove(product.id)}>
                <RxCrossCircled />
              </button>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProductCard;
