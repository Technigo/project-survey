import React from "react";
import ButtonNextPage from "./ButtonNextPage";
import "./SecondQuestion.css";

const SecondQuestion = ({
  interestInput,
  onInterestInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">Favourite thing!</h2>
      <p>What is your favourite household thing?</p>
      <label className="label" htmlFor="interstInput"></label>
      <select
        className="input-select"
        id="interestInput"
        type="text"
        value={interestInput}
        onChange={onInterestInputChange}
        required
      >
        <option value="">My favorite thing is</option>
        <option value="cleaning">Cleaning</option>
        <option value="vacuuming">Vaccuming</option>
        <option value="dusting">Dusting</option>
        <option value="empty dish washer">Empty dish washer</option>
      </select>
      <ButtonNextPage />
    </form>
  );
};

export default SecondQuestion;
