import React from "react";
import ImageComponent from "Components/SummaryImg";

// value?? {FirstQuestion.radioChecked}

const Summary = ({ fundamentalInput, selectOption, radioChecked }) => {
  return (
    // CHANGE NAMES HERE!
    <div className="container">
      <div className="contentWrapper">
        <p className="summaryQuestion">Are you a Drag Race fan? </p>{" "}
        <p className="summaryAnswer">
          {radioChecked === "yes"
            ? "Yasssss queen!"
            : "Nope, I have bad taste."}
        </p>
        <p className="summaryQuestion">Your favourite queen is </p>
        <p className="summaryAnswer"> {selectOption}</p>
        <p className="summaryQuestion">Reading is... </p>
        <p className="summaryAnswer"> {fundamentalInput}</p>
        <ImageComponent />
      </div>
    </div>
  );
};

export default Summary;
