import React from 'react';

import "components/question2.css";

const dropDownOptionsArray = ["0-10 km", "20-50 km", "50+ km"];

// a drop-down menu
const Question2 = ({ questionText, questionAnswer, onDistanceChange }) => {

  return (
    <section className="section-container">
      <div className="form-container">
        <label htmlFor="drop-down">{questionText}</label>
        <select
          onChange={(event) => onDistanceChange(event.target.value)}
          value={questionAnswer}
          id="drop-down"
          name="distance"
        >
          {/* If you want to mark an <option> as selected, reference the value of that option
           in the value of its <select> instead. 
           Check out “The select Tag” for detailed instructions. */}
          {dropDownOptionsArray.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </select>
      </div>
    </section>
  );
};

export default Question2;