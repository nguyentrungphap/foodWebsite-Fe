import React from "react";
import { menu_list } from "../../assets/assets";
import clsx from "clsx";
import AllFood from "../../assets/all_food.jpg"

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-[20px] mt-8" id="explore-menu">
      <h1 className="text-h1Explore font-medium text-2xl">Explore our menu</h1>
      <p className="text-textExplore max-w-[60%]">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-30 text-center my-20 overflow-x-scroll ExploreMenu">
        <div
          onClick={() => {
            setCategory("All");
          }}
        >
          <img
            src={AllFood}
            alt=""
            className={clsx(
              "w-8 min-w-[90px] h-8 min-h-[90px] cursor-pointer rounded-full transition duration-200",
              {
                "border-4 border-solid border-tomato p-2":
                  category === "All",
              }
            )}
          />
          <p className="mt-4 text-gray-600 text-custom cursor-pointer">
            All Dishes{" "}
          </p>
        </div>
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
                    "border-4 border-solid border-tomato p-2":
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
