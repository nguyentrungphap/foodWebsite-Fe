import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const hasAlreadyAddToCart = cartItems.find((cartItem) => cartItem.id === id);
  const quantity = hasAlreadyAddToCart ? hasAlreadyAddToCart.quantity : "";

  return (
    <div className="flex flex-1 flex-col justify-between items-center border border-gray-300 rounded-lg p-4 m-2 shadow-md transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt="" className="w-full rounded-t-lg" />

        <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
          {hasAlreadyAddToCart && (
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[30px]"
            />
          )}
          {quantity}
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_green}
            alt=""
            className="w-[30px]"
          />
        </div>
      </div>
      <div className="p-[20px]">
        <div className="flex mb-[10px] flex-col items-start">
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-tomato text-[22px] font-medium my-10px">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
