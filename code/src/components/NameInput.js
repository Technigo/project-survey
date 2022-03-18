import React from "react";

const NameInput = (props) => {
  const { name, onNameInputChange, onStepChange } = props;

  return (
    <div className="form-container">
      <div className="text-container">
        <form onSubmit={onStepChange}>
          <label htmlFor="nameInput">
            What's your name?
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
    </div>
  );
};

export default NameInput;
