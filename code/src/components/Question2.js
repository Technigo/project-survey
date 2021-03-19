import React from "react";

import "./Question2.css";

export const Question2 = ({ populationAge, setPopulationAge, min, max }) => {

  /* nextelementSibling and previousElementSbling is used to display a slider 
  and to that a connecnted number field that shows the value of the slider when 
  the user moves the handle */
  const sliderWithDisplay = (type) => {
    return (
      <input
        type={type}
        id={type}
        min={min}
        max={max}
        value={populationAge}
        onChange={(event) => {
          type === "range"
            ? setPopulationAge(
                (event.target.nextElementSibling.value = event.target.value)
              )
            : setPopulationAge(
                (event.target.previousElementSibling.value = event.target.value)
              );
        }}
      />
    );
  };

  return (
    <form className="range-slider">
      <label htmlFor="range">
        <h3>
          Imagine 50 years into the future, how many percent of the population
          do you estimate will live to be over 150 years old?
        </h3>
      </label>
      {sliderWithDisplay("range")}
      {sliderWithDisplay("number")}
      <span className="percent-sign">%</span>
    </form>
  );
};
