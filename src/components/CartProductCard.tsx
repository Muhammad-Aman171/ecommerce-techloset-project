import React, { useState } from "react";
import { RootState, AppDispatch } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slices/AddToCartSlice.ts";

const CartProductCard: React.FC = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector(
    (state: RootState) => state.addToCartSlice.items
  );

  console.log("Cart Items from Redux:", cartItems);

  // `productSlice` se sabhi products ka data le kar, un IDs ko match karna
  const products = useSelector(
    (state: RootState) => state.productSlice.products
  );

  console.log("Products from Redux:", products);

  // Cart items ke products ko map karna
  const cartProducts = cartItems
    .map((cartItem: { id }) =>
      products.find((product) => product.id === cartItem.id)
    )
    .filter((product) => product !== undefined); // Undefined products ko hatao

  console.log("Cart Products to Display:", cartProducts);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id)); // Dispatch the remove action with the product ID
    console.log(`Removed product with ID: ${id}`);
  };

  if (cartProducts.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  return (
    <div>
      {cartProducts.map((product) => (
        <div key={product.id} className="grid grid-cols-5 place-items-center ">
          <div className="border border-black col-span-2 flex items-center justify-around w-full my-[20px] ">
            <div>
              <img src={product.image} alt="game play img does not show" />
            </div>
            <div className="flex flex-col gap-y-2.5 ">
              <h3 className="text-[#003F62] text-[20.68px] leading-[31.02px] font-semibold  ">
                {product.title}
              </h3>
              <p className="text-[#2F2F2F] text-[20.68px] leading-[31.02px]">
                Color: Green
              </p>
              <p className="text-[#2F2F2F] text-[20.68px] leading-[31.02px] ">
                Size: 30
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[22.68px] leading-[34.02px] text-[#2F2F2F] ">
              ${product.price}
            </h3>
          </div>
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
          <div>
            <h3 className="text-[22.68px] leading-[34.02px] text-[#2F2F2F] ">
              <button onClick={() => handleRemove(product.id)}>Remove</button>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProductCard;
