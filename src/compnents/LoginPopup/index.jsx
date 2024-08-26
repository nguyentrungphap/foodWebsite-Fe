import React, { useState } from "react";
import { assets } from "../../assets/assets";
function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("SING UP");
  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090]">
      <div className=" relative w-full h-full">
        <form className="place-self-center w-loginpopup text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fadeIn sticky top-[150px] left-[40%]">
          <div className="flex justify-between items-center text-black">
            <h2>{currState}</h2>
            <img
              onClick={() => {
                setShowLogin(false);
              }}
              src={assets.cross_icon}
              alt=""
              className="w-[16px] cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            {currState === "LOGIN" ? (
              <></>
            ) : (
              <input
                className="outline-none border border-[#c9c9c9] p-2 rounded-md"
                type="text"
                placeholder="Your Name"
                required
              />
            )}
            <input
              className="outline-none border border-[#c9c9c9] p-2 rounded-md"
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              className="outline-none border border-[#c9c9c9] p-2 rounded-md"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="border-none p-[10px] rounded-[4px] text-white bg-tomato text-[15px] cursor-pointer">
            {currState === "SING UP" ? "Create account" : "Login  "}
          </button>
       {
        currState ==="SING UP" ?(
          <div className="flex items-start gap-[8px] mt-[-15px">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, i aggre to the terms of use & privacy policy.</p>
        </div>
        ):<></>
       }
          {currState === "LOGIN" ? (
            <p>
              Create a new account?{" "}
              <span
                className="text-tomato font-medium cursor-pointer"
                onClick={() => {
                  setCurrState("SING UP");
                }}
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                className="text-tomato font-medium cursor-pointer"
                onClick={() => {
                  setCurrState("LOGIN");
                }}
              >
                Login here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
