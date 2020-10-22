import React from "react";

import Survey from "./Survey";

import CatPaws from "img/cat-paws.png";


export const App = () => {
 
  return (
    <div className="app-container">
      <Survey />
       <img className="paws" src= {CatPaws} alt="cat with bouncing tail"/>
    </div>
  )
}

