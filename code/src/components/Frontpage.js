import React from "react";
import ImageComponent from "./FrontpageImage";

const Frontpage = () => {
  return (
    <div className="formContainer">
      <div className="wrapper">
        <p>
          The long time awaited question, 80's vs 90's Chickflicks, which are
          better?
        </p>
        <p>Find out what you prefer at the end!</p>
        <ImageComponent />
      </div>
    </div>
  );
};

export default Frontpage;
