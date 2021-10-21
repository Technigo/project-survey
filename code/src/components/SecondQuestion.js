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
      <h2 className="page-header">second question</h2>
      <label className="label" htmlFor="interstInput">
        <p>What is your interest?</p>
      </label>
      <select
        className="input-select"
        id="interestInput"
        type="text"
        value={interestInput}
        onChange={onInterestInputChange}
        // required
      >
        <option value="">Select what you are interested in</option>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
        <option value="buyer-and-seller">Buyer and seller</option>
      </select>
      <ButtonNextQuestion />
    </form>
  );
};

export default SecondQuestion;
