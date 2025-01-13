import React, { useState } from "react";
// import { AppDispatch } from "../store/store";
import { RootState } from "../store/store";

// import GamePlayImg1 from "../assets/imgs/gameplaysmallimg.png";
import { useSelector } from "react-redux";

// interface CartProductCardTypesProps {
//   id?: number;
// }

const CartProductCard: React.FC = () => {
  const [count, setCount] = useState(0);

  const cartItems = useSelector(
    (state: RootState) => state.addToCartSlice.items
  );

  const lastAddedId = cartItems[cartItems.length - 1];

  const product = useSelector((state: RootState) =>
    state.productSlice.products.find((item: any) => item.id === lastAddedId)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-5 place-items-center ">
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
            ${product.price}
          </h3>
        </div>
      </div>
      <hr className="border border-[#C3C3C3] my-5 " />
    </div>
  );
};

export default CartProductCard;
