import React from "react";

const EmailInput = (props) => {
  const { email, onSecondInputChange, onStepChange } = props;

  return (
    <div>
      <form onSubmit={onStepChange}>
        <label htmlFor="emailadresss">
          email adress here
          <input
            id="emailadress"
            type="text"
            value={email}
            onChange={onSecondInputChange}
          />
        </label>
        <button type="Submit">Next</button>
      </form>
    </div>
  );
};

export default EmailInput;
