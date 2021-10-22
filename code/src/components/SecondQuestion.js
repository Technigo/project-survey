import React from "react";

const SecondQuestion = ({ roleInput, onRoleInputChange, onStepChange }) => {
  return (
    <section className="form-container">
      <form>
        <label class="label-text" htmlFor="roleInput">
          What role fits your play-style the best?
        </label>
        <input
          required
          id="roleInput"
          type="text"
          value={roleInput}
          onChange={onRoleInputChange}
        />
        <button type="submit" onClick={onStepChange}>
          Next question
        </button>
      </form>
    </section>
  );
};

export default SecondQuestion;
