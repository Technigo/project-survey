import React, { useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";

export const QuestionSeven = ({ friendliness, onFriendlinessChange }) => {
  const handleRangeChange = (changeEvent) => {
    onFriendlinessChange(changeEvent.target.value);
  };

  const { width } = useWindowSize();

  useEffect(() => {
    const slider = document.querySelector(".bubble");
    if (slider) {
      if (width <= 767) {
        slider.style.left = `${Number(friendliness * 27 - 15)}px`;
      } else {
        slider.style.left = `${Number(friendliness * 52 - 38)}px`;
      }
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
