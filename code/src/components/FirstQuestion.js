import React from "react";
import ButtonNextQuestion from "./ButtonNextPage";
import "./FirstQuestion.css";

const FirstQuestion = ({ nameInput, onNameInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">Your name please</h2>
      <p>What nickname would suit you when you "vabbar"?</p>
      <label className="label" htmlFor="nameInput"></label>
      <input
        className="input-first-question"
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
        name="nameInput"
        required
      />
      <span className="test"></span>
      <ButtonNextQuestion />
    </form>
  );
};

export default FirstQuestion;
