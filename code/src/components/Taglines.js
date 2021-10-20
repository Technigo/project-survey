import React from "react";

const Taglines = ({ tagline, onTaglineChange, onStepChange }) => {
  // v1
  return (
    <form className="taglines">
      <label>
        <input
          className="taglines-quotes"
          type="radio"
          name="tagline"
          value="Are you calling me a snake? Honey, I'm a python!"
          onChange={onTaglineChange}
        />
        "Are you calling me a snake? Honey, I'm a python!"
      </label>

      <label>
        <input
          type="radio"
          value="I'm never disengaging, I'm reacting!"
          onChange={onTaglineChange}
        />
        "I'm never disengaging, I'm reacting!"
      </label>

      <label>
        <input
          type="radio"
          name="tagline"
          value="A little css will spice up any party!"
          onChange={onTaglineChange}
        />
        "A little css will spice up any party!"
      </label>

      <label>
        <input
          type="radio"
          name="tagline"
          value="I have fame and fortune, and I've googled it!"
          onChange={onTaglineChange}
        />
        "I have fame and fortune, and I've googled it!"
      </label>

      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default Taglines;
