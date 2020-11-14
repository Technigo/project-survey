import React from "react";

const Question3 = ({ userName, onNameChange }) => {
  return (
    <section className="question-4" role="textbox">
      <label htmlFor="email" aria-labelledby="enter your email"></label>
      <input
        value={userName}
        onChange={onNameChange}
        id="email"
        type="email"
        placeholder="Enter your email..."
        aria-labelledby="enter your email"
        required
        aria-autocomplete="inline"
      />
    </section>
  );
};

export default Question3;
