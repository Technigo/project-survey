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
      <form>
        <h2>Thank you {nameInput}! A summary of your exit ticket:</h2>
        <p>You're feeling {dropDownInput} today</p>
        <p>You feel you understand the content {radioButtonInput}</p>
        <p>Three things you learned: {textInput}</p>
        <p>A question you would like me to answer: {questionInput}</p>
        <button onClick={() => window.location.reload()}>Reset</button>
      </form>
    </section>
  );
};

export default Summary;
