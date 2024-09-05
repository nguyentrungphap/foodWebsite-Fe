import React, { useContext } from "react";
import { useLocation } from "react-router-dom";


function Test() {
    const location = useLocation();  
    function changeTitle() {
        document.title = location.pathname; // Set new title here
        alert("Title changed to: " + document.title);
      }
    return (
    <>
        <div>
      <h3>Current Location</h3>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <button onClick={changeTitle()}>Change Title</button>
    </div>
    </>
  );
}

export default Test;
