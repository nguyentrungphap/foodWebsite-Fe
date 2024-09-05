import React from "react";

function Header() {
  return (
    <div
      className="h-[33vw] my-30px mx-auto relative"
      style={{
        backgroundImage: `url("./header_img.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className=" font-medium text-white text-[4.5vw]">
          Order your favorite food here
        </h2>
        <p className="text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="border-none text-homeButton font-medium py-[1vw] px-[2.3vw] bg-white text-[1vw] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
