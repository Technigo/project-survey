import React, { useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";

export const QuestionThree = ({ variety, onVarietyChange }) => {
  const handleRangeChange = (changeEvent) => {
    onVarietyChange(changeEvent.target.value);
  };

  const { width } = useWindowSize();

  useEffect(() => {
    const slider = document.querySelector(".bubble");
    if (slider) {
      if (width <= 767) {
        slider.style.left = `${Number(variety * 27 - 15)}px`;
      } else {
        slider.style.left = `${Number(variety * 52 - 38)}px`;
      }
    }
  });

  return (
    <form>
      <div>
        <h1 className="questions-main-heading">Variety</h1>
      </div>
      <div className="slider-parent">
        <input className="range" type="range" min="1" max="10" value={variety} onChange={handleRangeChange} />
        <div id="bubble" className="bubble">
          {variety}
        </div>
      </div>
    </form>
  );
};

// https://codepen.io/shashank_coder/pen/jOqxOpK
