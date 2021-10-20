import React, { useState } from "react";

import Question from "./Question";
import ProgressBar from "./ProgressBar";
import ReviewSubmit from "./ReviewSubmit";


const questions = [
  {
    number: 1,
    text: "What is your favourite colour?",
    inputType: "text",
    options: ["red", "blue", "green", "yellow"],
  },
  {
    number: 2,
    text: "What is your second favourite colour?",
    inputType: "radio",
    options: ["red", "blue", "green", "yellow", "purple"],
  },
  {
    number: 3,
    text: "What is your third favourite colour?",
    inputType: "select",
    options: ["red", "blue", "green", "yellow", "orange"],
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
