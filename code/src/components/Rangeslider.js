import React from "react";
import "./Rangeslider.css";

export const Rangeslider = (props) => {
  const { populationAge, setPopulationAge } = props;

  {/* By using next and previous sibling the range slider and the 
      number input can be connected to show the value dynamically in the number input
      when the user moves the range slider */}
  const sliderWithDisplay = (type) => {
    return (
      <input
        type={type}
        id={type}
        min={props.min}
        max={props.max}
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
    <div className="range-slider__inner">
      <label htmlFor="range">
        <h3>
          Imagine 50 years into the future, how many percent of the population
          do you estimate will live to be over 150 years old?
        </h3>
      </label>
      {sliderWithDisplay("range")}
      {sliderWithDisplay("number")}
      <span className="percent-sign">%</span>
    </div>
  );
};
