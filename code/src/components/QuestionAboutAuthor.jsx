import React, { useState } from "react";

const QuestionAboutAuthor = ({ onFormSubmit }) => {
  const [select, setSelect] = useState("");
  const answerList = [
    "Jacqueline",
    "Jane",
    "Jennifer",
    "Jody",
    "Julie",
    "Joanne",
  ];
  const onFormCompleted = (e) => {
    e.preventDefault();
    if (select === "Joanne") onFormSubmit("correct");
    else onFormSubmit("wrong");
  };

  return (
    <form
      className="question"
      aria-label="survey form"
      onSubmit={onFormCompleted}
    >
      <p className="question-subtitle" htmlFor="username">
        <span className="question-number">3.</span> What is
        <span className="strong"> JK Rowling</span>'s first name?
      </p>
      <img
        className="question-img"
        alt="JK Rowling portrait"
        src="https://www.barnensbibliotek.se/portals/0/image/RowlingJK_Foto_Debra%20Hurford%20Brown_460q.jpg?ver=IB4sUphdL4RjieEQ5OyONg%3D%3D"
      />

      <select
        className="question-list"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option className="answer-option">Select an option:</option>
        {answerList.map((answer) => (
          <option key={answer} className="answer-option" value={answer}>
            {answer}
          </option>
        ))}
      </select>
      <button type="submit" className="submit-button">
        OK
      </button>
    </form>
  );
};

export default QuestionAboutAuthor;
