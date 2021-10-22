import React, { useState } from "react";

import Question from "./Question";
import ProgressBar from "./ProgressBar";
import ReviewSubmit from "./ReviewSubmit";


const questions = [
  {
    number: 1,
    text: "What is your name?",
    inputType: "text",
    options: [],
  },
  {
    number: 2,
    text: "What is your favourite word or phrase?",
    inputType: "text",
    options: [],
  },
  {
    number: 3,
    text: "What is your favourite colour?",
    inputType: "radio",
    options: ["red", "blue", "green", "black", "purple"],
  },
  {
    number: 4,
    text: "What is your favourite font?",
    inputType: "select",
    options: ["Times New Roman", "Arial", "Courier New", "Brush Script MT", "Roboto", "Comic Sans MS"],
  },
  {
    number: 5,
    text: "What is your font weight?",
    inputType: "radio",
    options: ["bold", "normal"],
  },
];

const AllQuestions = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmission = (event) => {
    event.preventDefault();
    // This condition will only set the question number up one if the answer given was valid. If not valid, a message will appear instead.
    if (
      answers[questionNumber] === "" ||
      answers[questionNumber] === undefined
    ) {
      setValid(false);
    } else {
      setValid(true);
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleGoingBack = (event) => {
    event.preventDefault();

    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
      setValid(true)
    }
  };

  const onAnswerChange = (newAnswer) => {
    setAnswers({...answers, [questionNumber]: newAnswer});
  };

  const lastQuestion = questionNumber === questions.length - 1;
  const firstQuestion = questionNumber === 0;
  const questionsRemaining = questionNumber < questions.length;
  const progress = (questionNumber/questions.length)*100

  return (
    <>
      {questionsRemaining ? (
        <>
          <form className="form" onSubmit={handleSubmission}>
            <Question
              key={questions[questionNumber].number}
              question={questions[questionNumber]}
              answer={answers[questionNumber] || ""}
              setAnswer={onAnswerChange}
              valid={valid}
            />
            <button className="back-btn" type="button" onClick={handleGoingBack} disabled={firstQuestion}>
              Go back
            </button>

            <button className="enter-btn" type="submit">
              {lastQuestion ? "Submit" : "Next Question"}
            </button>
          </form>
          {!valid && <p className="validation-text">Please enter a response</p>}
          <ProgressBar progress={progress}/>
        </>
      ) : (
        <ReviewSubmit answers={answers} />
      )}
    </>
  );
};

export default AllQuestions;
