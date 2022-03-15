import React, { useState } from "react";

export const App = () => {
  const questions = [
    {
      id: "dish",
      question: "If you could only eat one dish for the rest of your life, what would it be?",
      answer_type: "text",
    },
    {
      id: "cuisine",
      question: "Which of the two is your favorite cuisine?",
      answer_type: "radio",
      options: ["Mexican", "Japanese"],
    },
    {
      id: "herbs",
      question: "What herb is superior?",
      answer_type: "select",
      options: ["Basil", "Coriander", "Parsley"],
    },
  ];

  const [answers, updateAnswers] = useState([]);

  switch (answers.length) {
    case 0:
      return (
        <form>
          <div className="questionCard">
            <h2>{questions[0].question}</h2>
            <input id={questions[0].id} type="text"></input>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              return updateAnswers((arr) => [
                ...arr,
                document.getElementById(questions[0].id).value,
              ]);
            }}
          >
            Next question
          </button>
          {/* {console.log(questions[0].id)} */}
        </form>
      );
    case 1:
      return (
        <form>
          <div className="questionCard">
            <h2>{questions[1].question}</h2>
            <div id={questions[1].id}>
              <label htmlFor={questions[1].options[0]}>{questions[1].options[0]}</label>
              <input
                id={questions[1].id + "1"}
                name="radio"
                className="radio"
                type="radio"
                value={questions[1].options[0]}
                checked
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
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              let option1 = document.getElementById(questions[1].id + "1");
              let option2 = document.getElementById(questions[1].id + "2");

              option1.checked
                ? updateAnswers((arr) => [...arr, option1.value])
                : updateAnswers((arr) => [...arr, option2.value]);
            }}
          >
            Next question
          </button>
          {/* {console.log(questions[1].id)} */}
        </form>
      );
    case 2:
      return (
        <form>
          <div className="questionCard">
            <h2>{questions[2].question}</h2>

            <select id={questions[2].id} required>
              <option selected disabled>
                Choose option
              </option>
              <option value={questions[2].options[0]}>{questions[2].options[0]}</option>
              <option value={questions[2].options[1]}>{questions[2].options[1]}</option>
              <option value={questions[2].options[2]}>{questions[2].options[2]}</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              let menu = document.getElementById(questions[2].id);
              return updateAnswers((arr) => [...arr, menu.options[menu.selectedIndex].text]);
            }}
          >
            Submit questions
          </button>
          {/* {console.log(questions[2].id)} */}
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
