import React from "react";

const FifthQuestion = ({ graduation, onGraduationChange, onStepChange }) => {
  return (
    <section className="form-container">
      <form>
        <h2 tabIndex="0" className="select-h2">
          How do you think you will feel at the graduation?
        </h2>
        <label tabIndex="0" className="description" htmlFor="selectInput">
          Select one of the options
        </label>
        <select onChange={onGraduationChange} value={graduation}>
          <option value="">Select one by clicking here</option>
          <option value="thankful you made it through">
            thankful you made it through
          </option>
          <option value="surprised you made it">surprised you made it</option>
          <option value="ready to get started">ready to get started</option>
          <option value="somehow at the finish line">
            somehow at the finish line
          </option>
        </select>

        <button disabled={graduation === ""} onClick={onStepChange}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default FifthQuestion;
