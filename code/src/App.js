import React, { useState } from "react";
import QuestionText from "components/QuestionText";

export const App = () => {
  const questions = [
    {
      id: "dish",
      question_text: "If you could only eat one dish for the rest of your life, what would it be?",
      answer_type: "text",
    },
    {
      id: "cuisine",
      question_text: "Which of the two is your favorite cuisine?",
      answer_type: "radio",
      options: ["Mexican", "Japanese"],
    },
    {
      id: "herbs",
      question_text: "What herb is superior?",
      answer_type: "select",
      options: ["Basil", "Coriander", "Parsley"],
    },
  ];

  const [answers, updateAnswers] = useState([]);

  switch (answers.length) {
    case 0:
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            return updateAnswers((arr) => [...arr, document.getElementById(questions[0].id).value]);
          }}
        >
          <QuestionText question={questions[0]} />

          <button type="submit">Next question</button>
        </form>
      );
    case 1:
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let option1 = document.getElementById(questions[1].id + "1");
            let option2 = document.getElementById(questions[1].id + "2");

            option1.checked
              ? updateAnswers((arr) => [...arr, option1.value])
              : updateAnswers((arr) => [...arr, option2.value]);
          }}
        >
          <QuestionText question={questions[1]} />

          {/* <div className="questionCard">
            <h2>{questions[1].question_text}</h2>
            <div id={questions[1].id}>
              <label htmlFor={questions[1].options[0]}>{questions[1].options[0]}</label>
              <input
                id={questions[1].id + "1"}
                name="radio"
                className="radio"
                type="radio"
                value={questions[1].options[0]}
                defaultChecked
              />
              <label htmlFor={questions[1].options[1]}>{questions[1].options[1]}</label>
              <input
                name="radio"
                id={questions[1].id + "2"}
                className="radio"
                type="radio"
                value={questions[1].options[1]}
              />
            </div>
          </div> */}
          <button type="submit">Next question</button>
        </form>
      );
    case 2:
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let menu = document.getElementById(questions[2].id);
            return updateAnswers((arr) => [...arr, menu.options[menu.selectedIndex].text]);
          }}
        >
          <QuestionText question={questions[2]} />

          {/* <div className="questionCard">
            <h2>{questions[2].question_text}</h2>

            <select id={questions[2].id} required>
              <option defaultValue disabled>
                Choose option
              </option>
              <option value={questions[2].options[0]}>{questions[2].options[0]}</option>
              <option value={questions[2].options[1]}>{questions[2].options[1]}</option>
              <option value={questions[2].options[2]}>{questions[2].options[2]}</option>
            </select>
          </div> */}
          <button type="submit">Submit questions</button>
        </form>
      );
    default:
      return (
        <h1>
          Thank you! You answered: {answers[0]}, {answers[1]}, and {answers[2]}
        </h1>
      );
  }
};
