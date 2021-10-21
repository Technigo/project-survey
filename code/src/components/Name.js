import React from "react";

const Name = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onPreviousStepChange,
}) => {
  return (
    <div className="wrapper">
      <form>
        <div className="form-wrapper">
          <label htmlFor="nameInput">Type your name</label>
          <input
            id="nameInput"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
          />{" "}
        </div>
        <div className="button-wrapper">
          <button onClick={onPreviousStepChange}>Previous question</button>
          <button onClick={onStepChange}>Next question</button>
        </div>
      </form>
    </div>
  );
};

export default Name;
