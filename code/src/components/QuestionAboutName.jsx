import React, { useState } from "react";

const QuestionAboutName = ({ onFormSubmit }) => {
  const [username, setUsername] = useState("");

  const onFormCompleted = (e) => {
    e.preventDefault();
    onFormSubmit(username);
  };
  const onInputChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <form
      className="question"
      aria-label="survey form"
      onSubmit={onFormCompleted}
    >
      <label className="question-title" htmlFor="username">
        <span className="question-number">1.</span> What's your name,
        challenger?
      </label>
      <p className="question-subtitle">
        Just your first one is fine. Or a nickname.
      </p>
      <input
        className="answer"
        type="text"
        name="username"
        onChange={onInputChange}
        value={username}
        autoComplete="off"
      />
      <button type="submit" className="submit-button">
        OK
      </button>
    </form>
  );
};

export default QuestionAboutName;
