import React, { useContext } from "react";
import { StoreContext } from "./../../context/StoreContext";
import FoodItem from "../FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-[30px]" id="food-display">
      <h2 className="text-customh2 font-semibold">Top dishes near you</h2>
      <div className="grid grid-cols-5 mt-7 gap-7 gap-y-12 flex flex-wrap justify-between">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
