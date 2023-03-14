/* eslint-disable */
import React from "react";

const NameQuestion = ({
  firstNameInput,
  handleFirstNameInputChange,
  onStepChange,
}) => {
  return (
    <>
      <section className="form-container">
        <form>
          <label className="label-text" htmlFor="firstNameInput">
            what is your name?
          </label>
          <input
            required
            className="input-field"
            id="nameInput"
            type="text"
            placeholder="write name here "
            name="firstName"
            value={firstNameInput}
            onChange={handleFirstNameInputChange}
          />
          <button type="submit" onClick={onStepChange}>
            Next Question
          </button>
        </form>
      </section>
    </>
  );
};

export default NameQuestion;