import React from "react";

import "./radiobutton.css";

const answersArray = ["YES", "NO"];

const Radiobutton = ({ radioText, radioAnswer, onAnswerChange }) => {

  return (
    <section className="section-container">
      <p>{radioText}</p>
      <div className="radio-btn-container">
        {answersArray.map(item => {
          return (
            <label tabIndex="0" key={item} htmlFor={item}>
              <input
                tabIndex="0"
                type="radio"
                id={item}
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

export default Radiobutton;