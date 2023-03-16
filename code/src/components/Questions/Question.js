import React, { useState } from 'react';
import { answersQ1, answersQ2, answersQ3, answersQ4 } from 'library/answers';
import FormRadioButton from '../FormRadioButtons/FormRadioButton';
import styles from './Questions.module.css';

const Question = ({ question, questionNo, setQuestionNo, answers }) => {
  const nextQuestion = () => {
    setQuestionNo(questionNo + 1);
  };
  const previousQuestion = () => {
    setQuestionNo(questionNo - 1);
  };

  // const Question = () => {
  return (
    <div>
      <div>
        {/* {FormRadioButton
          answers={answers}
          value={question}
          onChange={setQuestionNo} /> */}
        {/* First question */}
        <div>
          <h2>{question.header}</h2>
          <p>{question.text}</p>
          {questionNo === 1 && (<FormRadioButton answers={answers} />)}
          <button
            type="button"
            // disabled={question1}
            onClick={nextQuestion}>
            Next
          </button>
          <button
            type="button"
            // disabled={question1}
            onClick={previousQuestion}>
            Previous
          </button>
        </div>
        {/* Second question */}
        <div>
          <h2>{question.header}</h2>
          <p>{question.text}</p>
          {questionNo === 2 && (<FormSelect answers={answers} />)}
          <button
            type="button"
            // disabled={question1}
            onClick={nextQuestion}>
            Next
          </button>
          <button
            type="button"
            // disabled={question1}
            onClick={previousQuestion}>
            Previous
          </button>
        </div>
        {/* Third question */}
        <div>
          <h2>{question.header}</h2>
          <p>{question.text}</p>
          {questionNo === 3 && (<FormRadioButton answers={answers} />)}
          <button
            type="button"
            // disabled={question1}
            onClick={nextQuestion}>
            Next
          </button>
          <button
            type="button"
            // disabled={question1}
            onClick={previousQuestion}>
            Previous
          </button>
        </div>
        {/* Fourth question */}
        <div>
          <h2>{question.header}</h2>
          <p>{question.text}</p>
          {questionNo === 4 && (<FormRadioButton answers={answers} />)}
          <button
            type="button"
            // disabled={question1}
            onClick={nextQuestion}>
            Next
          </button>
          <button
            type="button"
            // disabled={question1}
            onClick={previousQuestion}>
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}
export default Question;