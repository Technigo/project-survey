import React from "react";
import './range.css'

const Range = ({ legend1, legend2, rangeValue, onRangeChange }) => {
  return (
    <>
      <input
        id="rangeInput"
        type="range"
        min="0"
        max="5"
        step="1"
        list="stepList"
        defaultValue={rangeValue}
        onChange={onRangeChange}
      />
      <div className="ticks" id="stepList">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <div className="legend">
        <span>{legend1}</span>
        <span>{legend2}</span>
      </div>
    </>
  );
};

export default Range;
