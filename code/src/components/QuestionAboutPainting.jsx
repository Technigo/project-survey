import React, { useState } from "react";

const QuestionAboutPainting = ({ onFormSubmit }) => {
  const [select, setSelect] = useState("");
  const answerList = [
    "Frida Kahlo",
    "Andrea Bocelli",
    "Salvador Dali",
    "Grant Wood",
    "Edvard Munch",
  ];
  const onFormCompleted = (e) => {
    e.preventDefault();
    if (select === "Salvador Dali") onFormSubmit("correct");
    else onFormSubmit("wrong");
  };

  return (
    <form
      className="question"
      aria-label="survey form"
      onSubmit={onFormCompleted}
    >
      <p className="question-subtitle" htmlFor="username">
        <span className="question-number">2.</span> Who painted
        <span className="strong"> The Persistence of Memory</span>?
      </p>
      <img
        className="question-img"
        alt="the persistence of memory"
        src="https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg"
      />

      {answerList.map((answer) => (
        <label className="question-list" key={answer}>
          <input
            className="answer-radio"
            type="radio"
            name="painting"
            onChange={(e) => setSelect(e.target.value)}
            value={answer}
          />
          {answer}
        </label>
      ))}
      <button type="submit" className="submit-button">
        OK
      </button>
    </form>
  );
};

export default QuestionAboutPainting;
