import React from "react";

const NameQuestion = ({
  firstNameInput,
  handleFirstNameInputChange,
  onStepChange,
}) => {
  return (
    <>
      <section>
        <form>
          <label htmlFor="firstNameInput">what is your name?</label>
          <input
            required
            id="nameInput"
            type="text"
            placeholder="type here please"
            name="firstName"
            value={firstNameInput}
            onChange={handleFirstNameInputChange}
          />
          <button onClick={onStepChange}>Next Question</button>
        </form>
      </section>
    </>
  );
};

export default NameQuestion;
