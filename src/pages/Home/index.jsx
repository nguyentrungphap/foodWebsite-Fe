import React, { useState } from "react";
import Header from "../../compnents/Header";
import ExploreMenu from "../../compnents/ExploreMenu";
import FoodDisplay from "./../../compnents/FoodDisplay/index";
import AppDownload from "../../compnents/AppDownload";

function Home() {
  const [category, setCategory] = useState("All");
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
