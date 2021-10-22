import React from "react";
import "./range.css";

const Range = () => {
  return (
    <div>
      <label for="points">
        <h3 className="range-title">
          On a scale from "the biggest" to "huuuuge" how great of a
          bravo(technigo)holic are you?
        </h3>
      </label>
      <div className="range-box">
        <span className="range-choice" role="img" aria-label="emoji">
          BIGGEST
        </span>
        <span className="range-choice" role="img" aria-label="emoji">
          HUUUGE
        </span>
      </div>
      <input
        className="range"
        type="range"
        id="points"
        name="points"
        min="0"
        max="10"
      ></input>
    </div>
  );
};

export default Range;
