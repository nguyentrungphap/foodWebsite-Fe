import React from "react";
import { menu_list } from "../../assets/assets";
import clsx from "clsx";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="text-h1Explore font-medium">Explore our menu</h1>
      <p className="text-textExplore max-w-[60%]">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-30 text-center my-20 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                const newCategory =
                  category === item.menu_name ? "All" : item.menu_name;
                setCategory(newCategory);
              }}
              key={index}
            >
              <img
                src={item.menu_image}
                alt=""
                className={clsx(
                  "w-8 min-w-[90px] cursor-pointer rounded-full transition duration-200",
                  {
                    "border-4 border-solid border-tomato-500 p-2":
                      category === item.menu_name,
                  }
                )}
              />

              <p className="mt-4 text-gray-600 text-custom cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-4 h-1 bg-gray-300 border-none" />
    </div>
  );
}

export default ExploreMenu;
