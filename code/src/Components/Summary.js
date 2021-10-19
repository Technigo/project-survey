import React from "react";
import ImageComponent from "Components/SummaryImg";

const Summary = () => {
  return (
    // CHANGE NAMES HERE!
    <div className="containerSummary">
      <div className="containerSummaryText">
        <p>Your answer to 1:</p>
        <p>Your answer to 2:</p>
        <p>Your answer to 3:</p>
      </div>
      <ImageComponent />
    </div>
  );
};

export default Summary;
