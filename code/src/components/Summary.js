/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './Summary.css';

export const Summary = ({ name, gender, age, food, times }) => {
  const [value, onChange] = useState(1);
  useEffect(() => {
    const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })
  return (
    <>
      <span className="summary">
        <span className="name">{name}</span> is a <span className="gender">{gender}</span> between <span className="age">{age}</span> that eats <span className="food">{food}</span> <span className="times">{times}</span>
      </span>
      {/* <div className="slidecontainer">
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
      </div> */}

      <div className="slider-parent">
        <span className="slider-title">Did you enjoy this survey?</span>
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={({ target: { value: radius } }) => {
            onChange(radius);
          }} />
        <div className="buble">
          {value}
        </div>
        <div className="slider">
          <span className="slider-1">Not at all</span>
          <span className="slider-2">The best survey I've had!</span>
        </div>
      </div>
    </>
  )
}

export default Summary;