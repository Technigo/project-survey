import React from "react";

import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

const Question = (props) => {
  const { question } = props;

  return (
    <>
      <h1>
        {question.number} {question.text}
      </h1>
      {question.inputType === "text" && <TextInput question={question.Text} />}
      {question.inputType === "radio" && (
        <RadioInput options={question.options} />
      )}
      {question.inputType === "select" && (
        <SelectInput options={question.options} />
      )}
      <button>Continue</button>
    </>
  );
};

export default Question;
