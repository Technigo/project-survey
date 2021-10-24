import React from "react";

const SecondQuestion = ({ roleInput, onRoleInputChange, onStepChange }) => {
  return (
    <section className="form-container">
      <h2>What role fits your play-style the best?</h2>

      <label htmlFor="roleInput">
        <h3>Tank</h3>
        <input
          className="radio-button"
          id="roleInput"
          type="radio"
          value="Tank"
          onChange={onRoleInputChange}
          checked={roleInput === "Tank"}
        />
      </label>

      <label htmlFor="roleInput">
        <h3>Healer</h3>
        <input
          className="radio-button"
          id="roleInput"
          type="radio"
          value="Healer"
          onChange={onRoleInputChange}
          checked={roleInput === "Healer"}
        />
      </label>

      <label htmlFor="roleInput">
        <h3>Ranged dps</h3>
        <input
          className="radio-button"
          id="roleInput"
          type="radio"
          value="Ranged"
          onChange={onRoleInputChange}
          checked={roleInput === "Ranged"}
        />
      </label>

      <label htmlFor="roleInput">
        <h3>Melee dps</h3>
        <input
          className="radio-button"
          id="roleInput"
          type="radio"
          value="Melee"
          onChange={onRoleInputChange}
          checked={roleInput === "Melee"}
        />
      </label>
      <button type="submit" onClick={onStepChange}>
        Next question
      </button>
    </section>
  );
};

export default SecondQuestion;
