import React from "react";
import InputField from "./InputField";

const Question = ({ id, question_text, answer_type, options, onChange, inputValue }) => {
  return (
    <div className="questionCard">
      <h2>{question_text}</h2>
      <InputField
        name={id}
        type={answer_type}
        value={inputValue}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default Question;
