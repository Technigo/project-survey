// import { parserOptions } from "eslint-plugin-import/config/react";
import React from 'react';

const QuestionTitle = ({ heading, text }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <h3>{text}</h3>
    </div>
  );
};

const Questions = ({
  questionTitle,
  questionText,
  inputType,
  options,
  onChange,
  userInput
}) => {
  if (inputType === 'text') {
    return (
      <div className="box-question">
        <QuestionTitle heading={questionTitle} text={questionText} />
        <input
          onChange={onChange}
          placeholder="Type your name here..."
          required />
      </div>
    );
  } else if (inputType === 'select') {
    return (
      <div className="box-question">
        <QuestionTitle heading={questionTitle} text={questionText} />

        <div className="select">
          <select onChange={onChange} required>
            <option value="">Choose option</option>

            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.value}{' '}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  } else if (inputType === 'radio') {
    return (
      <div className="box-question">
        <QuestionTitle heading={questionTitle} text={questionText} />
        {options.map((option) => {
          return (
            <div className="radio" key={option.value}>
              <input
                id={option.value}
                type={inputType}
                name="name"
                value={option.value}
                checked={userInput === option.value}
                onChange={onChange}
                required />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <>it s another type: {inputType}</>;
  }
};
export default Questions;
