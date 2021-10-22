import React from "react";

const Summary = ({
  nameInput,
  dropDownInput,
  radioButtonInput,
  textInput,
  questionInput,
}) => {
  return (
    <section className="form-wrapper">
      <form className="summary-section">
        <h2>Thank you {nameInput}! A summary of your exit ticket:</h2>
        <div className="summary-text-container">
          <p className="summary-text">
            <span>&#8227;</span> You're feeling {dropDownInput} today
          </p>
          <p className="summary-text">
            <span>&#8227;</span> You feel you understand the content{" "}
            {radioButtonInput}
          </p>
          <p className="summary-text">
            <span>&#8227;</span> One thing that you learned: {textInput}
          </p>
          <p className="summary-text">
            <span>&#8227;</span> A question you would like me to answer:{" "}
            {questionInput}
          </p>
        </div>
        <button onClick={() => window.location.reload()}>Reset</button>
      </form>
    </section>
  );
};

export default Summary;
