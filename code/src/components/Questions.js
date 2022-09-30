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
  question_text,
  input_type,
  options,
  onChange,
  userInput,
}) => {
  // console.log(question_text);
  // console.log("input_type", input_type);
  // console.log("Users choice", userInput);

  if (input_type === "text") {
    return (
      <>
        <div className="box">
          <QuestionTitle heading={id} text={question_text} />

          <input
            userInput={userInput}
            onChange={onChange}
            placeholder="Type your name here..."
            required
          ></input>
        </div>
      </>
    );
  } else if (input_type === "select") {
    // console.log(options);

    return (
      <>
        <div className="box">
          <QuestionTitle heading={id} text={question_text} />

          <select userInput={userInput} onChange={onChange} required>
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
      </>
    );
  } else if (input_type === "radio") {
    return (
      <>
        <div className="box">
          <QuestionTitle heading={id} text={question_text} />

          {options.map((option) => {
            return (
              <label key={option.value}>
                <input
                  // id={option.value}
                  input_type={input_type}
                  value={option.value}
                  onChange={onChange}
                  checked={userInput === option.value}
                  required
                />
                {option.value}
              </label>
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

/*

//kolla stora och små bokstäver på userinput
//bytte ett value till userinput

*/
