import React from "react";

const FirstQuestion = () => {
  return (
    <div className="QuestionContainer">
      <p className="textQuestion">Do you like programming?</p>
      <input className="textInput" type="text" placeholder="yes or no?" />
    </div>
  );
};

export default FirstQuestion;
