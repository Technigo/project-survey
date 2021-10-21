import React, { useEffect } from "react";

export const QuestionThree = ({ variety, onVarietyChange }) => {
  const handleRangeChange = (changeEvent) => {
    onVarietyChange(changeEvent.target.value);
  };

  useEffect(() => {
    const slider = document.querySelector(".bubble");
    if (slider) {
      slider.style.left = `${Number(variety * 12 - 5)}px`;
    }
  });
  return (
    <form>
      <div>
        <h1 className="questions-main-heading">Variety</h1>
      </div>
      <div className="slider-parent">
        <input type="range" min="1" max="10" value={variety} onChange={handleRangeChange} />
        <div className="bubble">{variety}</div>
      </div>
    </form>
  );
};
