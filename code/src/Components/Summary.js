import React from "react";
import ImageComponent from "Components/SummaryImg";

const Summary = ({ fundamentalInput, selectOption, radioChecked }) => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <p className="summaryQuestion">Are you a Drag Race fan? </p>{" "}
        <p className="summaryAnswer">
          {radioChecked === "yes" ? "Yasssss queen!" : "Nope, I'm shady af."}
        </p>
        <p className="summaryQuestion">Your favourite queen is </p>
        <p className="summaryAnswer"> {selectOption}</p>
        <p className="summaryQuestion">Reading is.. </p>
        <p className="summaryAnswer"> {fundamentalInput}</p>
        <ImageComponent />
      </div>
    </div>
  );
};

export default Summary;
