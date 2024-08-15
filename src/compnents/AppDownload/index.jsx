import React from "react";
import { assets } from "../../assets/assets";
function AppDownload() {
  return (
    <div
      className="m-auto mt-[100px] text-customtext text-center font-medium"
      id="app-download"
    >
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="flex justify-center gap-x-4 gap-y-2  mt-[40px]">
        <img
          src={assets.play_store}
          alt=""
          className="w-customimg max-w-[180px] cursor-pointer
          transition duration-500
          transform scale-105"
        />
        <img
          src={assets.app_store}
          alt=""
          className="w-customimg max-w-[180px] cursor-pointer
          transition duration-500
          transform scale-105"
        />
      </div>
    </div>
  );
}

export default AppDownload;
