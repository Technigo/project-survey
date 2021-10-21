import React from "react";

import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

const Question = (props) => {
  const { question, answer, setAnswer, valid } = props;

  return (
    <>
      <h1 className="question-text">
        {question.number}. {question.text}
      </h1>
      {question.inputType === "text" && (
        <TextInput
          label={question.text}
          value={answer}
          onValueChange={setAnswer}
          valid={valid}
        />
      )}
      {question.inputType === "radio" && (
        <RadioInput
          options={question.options}
          choice={answer}
          onValueChange={setAnswer}
        />
      )}
      {question.inputType === "select" && (
        <SelectInput
          options={question.options}
          selection={answer}
          onValueChange={setAnswer}
        />
      )}
    </>
  );
};

export default Question;
