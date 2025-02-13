import React, { useContext } from "react";
import { StoreContext } from "./../../context/StoreContext";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function Cart() {
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="mt-[100px] ">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600 text-cart text-center ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <div
                key={item.id}
                className={`grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-center items-center text-gray-600 text-cart my-[10px] text-black`}
              >
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.price * item.quantity}</p>
                <p
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer text-red-600"
                >
                  <RemoveCircleIcon />
                </p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="my-[80px] flex justify-between text-[#555] gap-x-10">
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="font-semibold text-lg">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between text-[#555]">
              <p>Delivery free</p>
              <p>{2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <p>{getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button className="border-none text-white bg-tomato w-[max(15vw,200px)] py-3 px-0 rounded-md cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2 flex justify-between bg-gray-200 rounded-md">
              <input
                className="bg-transparent border-none outline-none pl-2"
                type="text"
                placeholder="promo code"
              />
              <button className="border-none text-white bg-tomato w-[max(15vw,200px)] py-3 px-0 rounded-md cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
