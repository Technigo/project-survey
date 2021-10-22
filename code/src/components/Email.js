// Question 4
import React from "react";

const Email = ({ email, onEmailChange, onStepChange }) => {
  return (
    <div className="container fourth-question">
      <form className="emailForm">
        <label>
          <h1>Do you want an e-mail to confirm your answers?</h1>
          <input
            type="checkbox"
            checked={email === true}
            onChange={onEmailChange}
          />
          Yes, I want an e-mail to confirm my answers
        </label>
        <button onClick={onStepChange}>Finish</button>
      </form>
    </div>
  );
};

export default Email;
