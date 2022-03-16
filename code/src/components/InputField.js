import React from "react";

const InputField = ({ question }) => {
  console.log(question);

  if (question.answer_type === "text") {
    return <input id={question.id} type="text"></input>;
  } else if (question.answer_type === "radio") {
    return (
      <div id={question.id}>
        <label htmlFor={question.options[0]}>{question.options[0]}</label>
        <input
          id={question.id + "1"}
          name="radio"
          className="radio"
          type="radio"
          value={question.options[0]}
          defaultChecked
        />
        <label htmlFor={question.options[1]}>{question.options[1]}</label>
        <input
          name="radio"
          id={question.id + "2"}
          className="radio"
          type="radio"
          value={question.options[1]}
        />
      </div>
    );
  } else if (question.answer_type === "select") {
    return (
      <select id={question.id} required>
        <option defaultValue disabled>
          Choose option
        </option>
        <option value={question.options[0]}>{question.options[0]}</option>
        <option value={question.options[1]}>{question.options[1]}</option>
        <option value={question.options[2]}>{question.options[2]}</option>
      </select>
    );
  }
};

export default InputField;
