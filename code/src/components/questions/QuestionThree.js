import React, { useState, useEffect } from "react";

// build on the tutorial https://dev.to/narendersaini32/how-to-create-range-slider-with-bubble-in-react-2eep

export const QuestionThree = () => {
  const [value, onChange] = useState(1);
  console.log(value);
  useEffect(() => {
    const slider = document.querySelector(".bubble");
    if (slider) {
      slider.style.left = `${Number(value * 12 - 5)}px`;
    }
  });
  return (
    <form>
      <div>
        <h1 className="questions-main-heading">Variety</h1>
      </div>
      <div className="slider-parent">
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={({ target: { value: radius } }) => {
            onChange(radius);
          }}
        />
        <div className="bubble">{value}</div>
      </div>
    </form>
  );
};
