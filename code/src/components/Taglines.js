import React from "react";
import "./taglines.css";

const Taglines = ({ tagline, onTaglineChange, onStepChange }) => {
  // v1
  return (
    <div className="name-container">
      <h2 className="taglinetitle">Choose your tag-line:</h2>
      <form className="tagline-container">
        <label className="taglines">
          <input
            className="taglines-quotes"
            type="radio"
            name="tagline"
            value="Are you calling me a snake? Honey, I'm a python!"
            onChange={onTaglineChange}
          />
          "Are you calling me a snake? Honey, I'm a python!"
        </label>

        <label className="taglines">
          <input
            className="taglines-quotes"
            type="radio"
            value="I'm never disengaging, I'm reacting!"
            onChange={onTaglineChange}
          />
          "I'm never disengaging, I'm reacting!"
        </label>

        <label className="taglines">
          <input
            className="taglines-quotes"
            type="radio"
            name="tagline"
            value="A little css will spice up any party!"
            onChange={onTaglineChange}
          />
          "A little css will spice up any party!"
        </label>

        <label className="taglines">
          <input
            className="taglines-quotes"
            type="radio"
            name="tagline"
            value="I have fame and fortune, and I've googled it!"
            onChange={onTaglineChange}
          />
          "I have fame and fortune, and I've googled it!"
        </label>

        <button className="next-button" onClick={onStepChange}>
          Next question
        </button>
      </form>
    </div>
  );
};

export default Taglines;
