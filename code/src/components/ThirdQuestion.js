import React from "react";

const ThirdQuestion = ({ classInput, onClassInputChange, onStepChange }) => {
  return (
    <section className="form-container">
      <form>
        <label class="label-text" htmlFor="classInput">
          What class are you or will you be playing?
        </label>
        <input
          required
          id="classInput"
          type="text"
          value={classInput}
          onChange={onClassInputChange}
        />
        <button type="submit" onClick={onStepChange}>
          See overview
        </button>
      </form>
    </section>
  );
};

export default ThirdQuestion;
