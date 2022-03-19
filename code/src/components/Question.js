import React from "react";
import InputField from "./InputField";
import "./Question.css";

const Question = ({ id, question_text, answer_type, options, onChange, inputValue }) => {
  return (
    <>
      <h2 className="question-text">{question_text}</h2>
      <InputField
        name={id}
        type={answer_type}
        value={inputValue}
        options={options}
        onChange={onChange}
      />
    </>
  );
};

export default Question;
