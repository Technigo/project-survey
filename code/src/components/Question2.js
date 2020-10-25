import React from 'react';

import "components/question2.css";

const dropDownOptionsArray = ["-", "0-10 km", "20-50 km", "50+ km"];

// a drop-down menu
const Question2 = ({ questionText2, questionAnswer2, onDistanceChange }) => {

  return (
    <section className="section-container">
      <div className="form-container">
        <label htmlFor="drop-down">{questionText2}
          <select
            name="drop-down" //not sure if necessary
            onChange={(event) => onDistanceChange(event.target.value)}
            value={questionAnswer2}
            required //doesn't work though ...
            id="drop-down"
          >
            {/* If you want to mark an <option> as selected, reference the value of that option
           in the value of its <select> instead. 
           Check out “The select Tag” for detailed instructions. */}
            {dropDownOptionsArray.map((option) => {
              return <option key={option} value={option}>{option}</option>;
            })}
          </select>
        </label>
      </div>
    </section>
  );
};

export default Question2;