import React from "react";

const SecondQuestion = ({
  dropDownInput,
  onDropDownInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <label htmlFor="dropDownInput">
        How do you feel after today's lesson?
      </label>
      <select
        id="dropDownInput"
        value={dropDownInput}
        onChange={onDropDownInputChange}
      >
        <option value="">Select a feeling:</option>
        <option value="happy">Happy 😃</option>
        <option value="overwhelmed">Overwhelmed 🤯</option>
        <option value="sad">Sad 😔</option>
        <option value="pensive">Pensive 🤔</option>
        <option value="bored">Bored 🥱</option>
        <option value="sleepy">Tired 😴</option>
        <option value="excited">Excited 🤩</option>
        <option value="nerdy">Nerdy 🤓</option>
      </select>

      <button disabled={dropDownInput === ""} onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default SecondQuestion;
