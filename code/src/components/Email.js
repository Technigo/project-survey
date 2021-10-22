// Question 4
import React from "react";
import { useState } from "react";

const Email = ({ email, onEmailChange, onStepChange }) => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  return (
    <div className="container fourth-question">
      <form>
        <label>
          <h1>Do you want a e-mail to confirm your answers?</h1>
          <input
            type="checkbox"
            checked={email === true}
            onChange={onEmailChange}
          />
        </label>
        <button onClick={onStepChange}>To see your answers</button>
      </form>
    </div>
  );
};

export default Email;
