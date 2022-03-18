import React from "react";

const NameInput = (props) => {
  const { name, onNameInputChange, onStepChange } = props;

  return (
    <div>
      <form onSubmit={onStepChange}>
        {/* <form onSubmit={(event) => event.preventDefault()}> */}
        <label htmlFor="nameInput">
          Whats your name?
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={onNameInputChange}
          />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default NameInput;
