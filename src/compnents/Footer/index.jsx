import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] pb-[20px] px-[8vw] pt-[80px] mt-[100px]"
      id="footer"
    >
      <div className="grid w-full gap-[80px] grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex  gap-[20px]">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="">COMPANY</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">Home</li>
            <li className="mb-[10px] cursor-pointer">About us</li>
            <li className="mb-[10px] cursor-pointer">Delivery</li>
            <li className="mb-[10px] cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="">GET IN TOUCH</h2>
          <ul>
            <li>012345767</li>
            <li>phapnguyen05032002@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-1 my-[20px] bg-gray-400 border-none" />
      <p className="">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
