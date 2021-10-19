import React from "react";
import ImageComponent from "Components/SummaryImg";

// value?? {FirstQuestion.radioChecked}

const Summary = ({ fundamentalInput, selectOption }) => {
  return (
    // CHANGE NAMES HERE!
    <div className="containerSummary">
      <div className="containerSummaryText">
        <p>1. Do you watch Drag Race?:</p>
        <p>2. Your favourite queen: {selectOption}</p>
        <p>3. Reading is: {fundamentalInput}</p>
      </div>
      <ImageComponent />
    </div>
  );
};

export default Summary;
