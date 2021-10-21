import React from "react";
import ImageComponent from "./IntroImg";

const Introduction = () => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <p>Welcome queens!</p>
        <p>Good luck, and don't fuck it up!</p>
        <ImageComponent />
      </div>
    </div>
  );
};

export default Introduction;
