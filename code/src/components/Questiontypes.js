import React from 'react';
/* This component will return different types of data depending on what type of question it is */

/* function showing heading and text for each question */
const QuestionTitle = ({ heading, text }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <h3>{text}</h3>
    </div>
  );
};

/* function showing different types of questions */
const Questiontypes = ({
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
          <select
            className="select-input"
            onChange={onChange}
            required>
            <option value="">Choose your energy level</option>

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
                className="radio-input"
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
    return <>its another type: {inputType}</>;
  }
};
export default Questiontypes;
