import React from "react";
import { images } from "../images/hello-world.png";

const options = [
  "Hello World",
  "margin problems",
  "Stackowerflow is down",
  "Cheaper option",
];

const ThirdQuestion = ({ relateToImg, onRelateToImgChange, onStepChange }) => {
  return (
    <section className="form-container">
      <h2>What image do you relate to the most?</h2>
      <section className="radio-options">
        {options.map((option) => {
          return (
            <label
              className="description radio-img"
              htmlFor={option}
              key={option}
            >
              <input
                className="hidebox"
                type="radio"
                value={option}
                checked={relateToImg === option}
                id={option}
                onChange={onRelateToImgChange}
              />
              {option}
            </label>
          );
        })}
      </section>

      <button onClick={onStepChange}> Let's start with the questions! </button>
    </section>
  );
};

export default ThirdQuestion;
