import React from "react";

const EmailInput = (props) => {
  const { email, onSecondInputChange, onStepChange } = props;

  return (
    <div>
      <form onSubmit={onStepChange}>
        <label htmlFor="emailaddress">
          Your email address?
          <input
            id="emailaddress"
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
