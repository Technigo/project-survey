import React from "react";
import RelateOne from "../images/helloworld.png";
import RelateTwo from "../images/maxout.png";
import RelateThree from "../images/if-else.png";
import RelateFour from "../images/cheaper.png";

export const ThirdQuestion = ({ radioValue, setRadioValue, onStepChange }) => {
  return (
    <section className="form-container">
      <div className="img-wrapper">
        <h2>What image do you relate to the most?</h2>
        <h3>
          You can only choose one of the options and you need to click on the
          image you want to select
        </h3>
        <div className="img-wrapper--images">
          <label htmlFor="relate">
            <input
              id="relate"
              type="radio"
              value={RelateOne}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateOne}
            />
            <img
              className="img-option"
              src={RelateOne}
              alt="page with only a heading"
            />
          </label>

          <label htmlFor="maxout">
            <input
              id="maxout"
              type="radio"
              value={RelateTwo}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateTwo}
            />
            <img
              className="img-option"
              src={RelateTwo}
              alt="air-conditioner in top right corner"
            />
          </label>

          <label htmlFor="forever">
            <input
              id="forever"
              type="radio"
              value={RelateThree}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateThree}
            />
            <img
              className="img-option"
              src={RelateThree}
              alt="if else forever"
            />
          </label>

          <label htmlFor="cheaper">
            <input
              id="cheaper"
              type="radio"
              value={RelateFour}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateFour}
            />
            <img
              className="img-option"
              src={RelateFour}
              alt="you get what you pay for"
            />
          </label>
        </div>
      </div>
      <button onClick={onStepChange}> Next Question </button>
    </section>
  );
};
