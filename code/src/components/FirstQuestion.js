import React from "react";
import ButtonNextQuestion from "./ButtonNextPage";
import "./FirstQuestion.css";

const FirstQuestion = ({ nameInput, onNameInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">Your name please</h2>
      <label className="label" htmlFor="nameInput">
        <p>Type your coder name here</p>
      </label>
      <input
        className="input-first-question"
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
        name="nameInput"
        // required
      />
      <ButtonNextQuestion />
    </form>
  );
};

export default FirstQuestion;
