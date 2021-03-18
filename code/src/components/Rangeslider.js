import React from "react";

import "./RangeSlider.css";

export const RangeSlider = ({populationAge, setPopulationAge, min, max}) => {

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
    <form className="range-slider" onSubmit={(event) => event.preventDefault()}>
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
}