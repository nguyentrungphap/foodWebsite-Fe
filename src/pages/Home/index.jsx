import React, { useState } from "react";
import Header from "../../compnents/Header";
import ExploreMenu from "../../compnents/ExploreMenu";
import FoodDisplay from "./../../compnents/FoodDisplay/index";
import AppDownload from "../../compnents/AppDownload";
import LoginPopup from "./../../compnents/LoginPopup/index";

function Home() {
  const [category, setCategory] = useState("All");

  console.log(category);
  return (
    <>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
      </div>
    </>
  );
}

export default Home;
