import React from "react";

const SecondQuestion = ({
  interestInput,
  onInterestInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <h2>second question</h2>
      <label htmlFor="interstInput">What is your interest?</label>
      <select
        id="interestInput"
        type="text"
        value={interestInput}
        onChange={onInterestInputChange}
      >
        <option value>Select what you are interested in</option>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
        <option value="buyer-and-seller">Buyer and seller</option>
      </select>
      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default SecondQuestion;
