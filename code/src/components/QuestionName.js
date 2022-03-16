import React from "react";
import Button from "./Button";

const QuestionName = ({ name, onNameChange }) => {
  return (
    <>
      <label htmlFor="name" className="label">
        What is your name?
      </label>
      <input
        id="name"
        name="name"
        className="input"
        type="text"
        placeholder="Type your name here"
        value={name}
        onChange={onNameChange}
        required
      />
      <Button button="Continue" />
    </>
  );
};

export default QuestionName;
