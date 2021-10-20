import React from "react";
import "./yourName.css";

const YourName = ({ name, onNameChange, onStepChange }) => {
  return (
    <div className="name-container">
      <form className="name-form">
        <label className="lable-text" htmlFor="nameInput">
          Type your full name:
        </label>
        <input
          className="input-place"
          id="nameInput"
          type="text"
          value={name}
          onChange={onNameChange}
        />

        <button className="next-button" onClick={onStepChange}>
          Lets start >>
        </button>
      </form>
    </div>
  );
};

export default YourName;
