/* eslint-disable linebreak-style */
import React from 'react';

const Satisfaction = (props) => {
  const { satisfactionRange, satisfaction, setSatisfaction, handleSatisfactionChange } = props
  
  return (
    <div className="food-counter">
      <form className="satisfaction-container">
        <p>What do you think of our online store?</p>
        <label htmlFor="satisfaction" className="satisfaction-slider">
          <input
            className="slider"
            type="range"
            min="0"
            max="4"
            value={satisfactionRange}
            onChange={handleSatisfactionChange}
            required />
          <p>{satisfaction}</p>
        </label>
      </form>
    </div>
  );
};

export default Satisfaction;