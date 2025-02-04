import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import Logo from "../assets/imgs/logo 1.png";
import { useAppSelector } from "../hooks/useRedux.ts";

const NavbarSearchBar: React.FC = () => {
  const cartItems = useAppSelector((state) => state.addToCartSlice.items);

  return (
    <div className="items-center">
      <div className=" bg-secoundTextColor flex justify-center ">
        <div className=" flex justify-between basis-[1330px] items-center mx-[55px]  max-md:mx-[10px]">
          <div className="flex items-center justify-between  m-[20px] basis-[670px]  ">
            <Link to="/">
              <div className="w-[100px] h-[28px]   ">
                <img src={Logo} alt="img does not show" />
              </div>
            </Link>
            <div className=" bg-white flex items-center rounded-[20px] max-xl:hidden  ">
              <input
                type="text"
                placeholder="Search any things"
                className="pl-[10px] placeholder-eightTextColor outline-none text-[14px] w-[270px] mr-10 "
              />
              <h3 className="px-[40px] py-[16px] bg-primary rounded-[20px] text-[14px] text-white ">
                Search
              </h3>
            </div>
          </div>
          <div className="flex items-center text-white">
            <span className=" flex items-center justify-between gap-x-3 m-4 text-nowrap max-md:m-2 ">
              <AiOutlineUser className="w-6 h-6 text-white" />
              <p className="max-md:hidden  ">Sign in</p>
            </span>
            <span className=" flex items-center justify-between gap-x-3 m-4 text-nowrap max-md:gap-x-1 max-md:m-2 ">
              <GoHeart className="w-6 h-6 text-white" />
              <span className="flex items-center justify-center text-[9px] bg-primary w-[14px] h-[15px] rounded-full ">
                0
              </span>
              <p className="max-md:hidden">Sign in</p>
            </span>
            <Link to="/Cart">
              <span className="flex items-center justify-between gap-x-3 m-4 max-md:gap-x-1 max-md:m-2 ">
                <BsCart3 className="w-6 h-6 text-white" />
                <span className="flex items-center justify-center text-[9px] bg-primary w-[14px] h-[15px] rounded-full ">
                  {cartItems.length}
                </span>
                <p className="max-md:hidden  ">Cart</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearchBar;
