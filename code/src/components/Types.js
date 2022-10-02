import { parserOptions } from "eslint-plugin-import/config/react";
import React from "react";

const QuestionTitle = ({ heading, text }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <h3>{text}</h3>
    </div>
  );
};
const Questions = ({
  id,
  question_title,
  question_text,
  input_type,
  options,
  onChange,
  userInput
}) => {
  if (input_type === "text") {
    return (
      <>
        <div className="box-question">
          <QuestionTitle heading={question_title} text={question_text} />
          <input
            onChange={onChange}
            placeholder="Type your name here..."
            required
          ></input>
        </div>
      </>
    );
  } else if (input_type === "select") {
    return (
      <>
        <div className="box-question">
          <QuestionTitle heading={question_title} text={question_text} />
          
          <div className="select">
          <select onChange={onChange} required>
            <option value="">Choose option</option>

            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.value}{" "}
                </option>
              );
            })}
          </select>
          </div>
        </div>
      </>
    );
  } else if (input_type === "radio") {
    return (
      <>
        <div className="box-question">
          <QuestionTitle heading={question_title} text={question_text} />
          {options.map((option) => {
            return (
              <div className ="radio" key={option.value}>
            <input
              id={option.value}
              type={input_type}
              name="test"
              value={option.value}
              checked={userInput === option.value}
              onChange={onChange}
              required
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return <>it's another type: {input_type}</>;
  }
};
export default Questions;