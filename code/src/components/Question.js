import React from "react";
import InputField from "./InputField";
import "./Question.css";

const Question = ({ id, question_text, input_type, options, onChange, inputValue }) => {
  return (
    <>
      <h2 className="question-text">{question_text}</h2>
      <InputField
        name={id}
        type={input_type}
        value={inputValue}
        options={options}
        onChange={onChange}
      />
    </>
  );
};

export default Question;
