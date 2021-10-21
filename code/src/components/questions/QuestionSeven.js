import React, { useState, useEffect } from "react";

// build on the tutorial https://dev.to/narendersaini32/how-to-create-range-slider-with-bubble-in-react-2eep

export const QuestionSeven = ({ friendliness, onFriendlinessChange }) => {
  // const [value, onChange] = useState(1);

  const handleRangeChange = (changeEvent) => {
    onFriendlinessChange(changeEvent.target.value);
  };

  useEffect(() => {
    const slider = document.querySelector(".bubble");
    if (slider) {
      slider.style.left = `${Number(friendliness * 12 - 5)}px`;
    }
  });
  return (
    <form>
      <div>
        <h1 className="questions-main-heading">Friendliness</h1>
      </div>
      <div className="slider-parent">
        <input type="range" min="1" max="10" value={friendliness} onChange={handleRangeChange} />
        <div className="bubble">{friendliness}</div>
      </div>
    </form>
  );
};
