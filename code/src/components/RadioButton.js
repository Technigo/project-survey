import React from "react";

import "./radiobutton.css";

const answersArray = ["YES", "NO"];

const RadioButton = ({ radioText, radioAnswer, onAnswerChange }) => {

  return (
    <section className="section-container">
      <p>{radioText}</p>
      <div className="radio-btn-container">
        {answersArray.map(item => {
          return (
            <label key={item} htmlFor="button">
              <input
                type="radio"
                name="button"
                id="button"
                required
                value={item}
                onChange={event => onAnswerChange(event.target.value)}
                checked={radioAnswer === item}
              ></input>
              {item}
            </label>
          );
        })}
      </div>
    </section>
  )
}

export default RadioButton;