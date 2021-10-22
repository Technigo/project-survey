import React from "react";
import ButtonNextQuestion from "./ButtonNextPage";
import "./SecondQuestion.css";

const SecondQuestion = ({
  interestInput,
  onInterestInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} id="secondQuestion" className="form">
      <h2 className="page-header">Favourite thing!</h2>
      <label className="label" htmlFor="interstInput">
        <p>What is your favourite household thing?</p>
      </label>
      <select
        className="input-select"
        id="interestInput"
        type="text"
        value={interestInput}
        onChange={onInterestInputChange}
        // required
      >
        <option value="">My favorite thing is</option>
        <option value="clean">Clean</option>
        <option value="vaccum">Vaccum</option>
        <option value="dust">Dust</option>
      </select>
      <ButtonNextQuestion />
    </form>
  );
};

export default SecondQuestion;
