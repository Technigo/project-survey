import React from "react";
import ImageComponent from "Components/ThirdImg";

const ThirdQuestion = (props) => {
  return (
    <div className="QuestionContainer">
      <p>Reading is what?</p>
      <div className="inputForm">
        <input className="textInput" type="text" placeholder="fundamental!" />
      </div>
      <ImageComponent />
    </div>
  );
};

export default ThirdQuestion;
