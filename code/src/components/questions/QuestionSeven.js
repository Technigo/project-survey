import React, { useEffect } from "react";

export const QuestionSeven = ({ friendliness, onFriendlinessChange }) => {
  const handleRangeChange = (changeEvent) => {
    onFriendlinessChange(changeEvent.target.value);
  };

  useEffect(() => {
    const slider = document.querySelector(".bubble");
    if (slider) {
      slider.style.left = `${Number(friendliness * 20)}px`;
    }
  });
  return (
    <form>
      <div>
        <h1 className="questions-main-heading">Friendliness</h1>
      </div>
      <div className="slider-parent">
        <input className="range" type="range" min="1" max="10" value={friendliness} onChange={handleRangeChange} />
        <div className="bubble">{friendliness}</div>
      </div>
    </form>
  );
};
