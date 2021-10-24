import React from "react";
import "./range.css";

const Range = () => {
  return (
    <div>
      <label for="scale">
        <h3 className="range-title">
          On a scale from "the biggest" to "huuuuge" how great of a
          bravo(technigo)holic are you?
        </h3>
      </label>
      <div className="range-box">
        <span className="range-choice">BIGGEST</span>
        <span className="range-choice">HUUUGE</span>
      </div>
      <input
        className="range"
        type="range"
        id="scale"
        name="scale"
        min="0"
        max="10"
      ></input>
    </div>
  );
};

export default Range;
