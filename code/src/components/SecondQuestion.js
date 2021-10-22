import React from "react";

const SecondQuestion = ({
  dropDownInput,
  onDropDownInputChange,
  onStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <form className="form-section">
        <h2>How do you feel after today's class?</h2>
        <label htmlFor="dropDownInput"></label>
        <select
          id="dropDownInput"
          value={dropDownInput}
          onChange={onDropDownInputChange}
        >
          <option value="">Select a feeling:</option>
          <option value="happy">Happy</option>
          <option value="overwhelmed">Overwhelmed</option>
          <option value="low">Low</option>
          <option value="thoughtful">Thoughtful</option>
          <option value="bored">Bored</option>
          <option value="tired">Tired</option>
          <option value="excited">Excited</option>
          <option value="nerdy">Nerdy</option>
          <option value="curious">Curious</option>
          <option value="confused">Confused</option>
        </select>

        <button disabled={dropDownInput === ""} onClick={onStepChange}>
          Next question
        </button>
      </form>
    </section>
  );
};

export default SecondQuestion;
