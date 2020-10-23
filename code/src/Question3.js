import React from "react";

const Question3 = ({ colors, onColorsChange }) => {
  return (
    <>
      <div className="question-3">
        <div>
          <label htmlFor="colorBlue">Blue</label>
          <input
            id="colorBlue"
            type="checkbox"
            checked={colors.includes("blue")}
            onChange={() => onColorsChange("blue")}
          />
        </div>
        <div>
          <label htmlFor="colorRed">Red</label>
          <input
            id="colorRed"
            type="checkbox"
            checked={colors.includes("red")}
            onChange={() => onColorsChange("red")}
          />
        </div>
        <div>
          <label htmlFor="colorGreen">Green</label>
          <input
            id="colorGreen"
            type="checkbox"
            checked={colors.includes("green")}
            onChange={() => onColorsChange("green")}
          />
        </div>
      </div>
    </>
  );
};

export default Question3;
