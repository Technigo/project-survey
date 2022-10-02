import React, { useState } from "react";
import Startpage from "components/Startpage";
import Types from "components/Types";
import Summary from "components/Summary";
import "./index.css";

const questionsData = [
  {
    id: "0",
  },
  {
    id: "1",
    question_title: "Nice, let's do this!",
    question_text: "First of all, what's your name?",
    input_type: "text",
  },
  {
    id: "2",
    question_title: "ENERGY LEVEL",
    question_text: "Energywise, how much energy do you need?",
    input_type: "select",
    options: [
      { value: "A lot" },
      { value: "Just enough to keep me going" },
      { value: "Low key, something slow" },
    ],
  },
  {
    id: "3",
    question_title: "GENRE",
    question_text: "What type of music do you prefer?",
    input_type: "radio",
    options: [
      { value: "Pop/Rock", label: "Pop/Rock" },
      { value: "Hiphop", label: "Hiphop" },
      { value: "World", label: "World" },
    ],
  },
  {
    id: "4",
    question_title: "EPOKE",
    question_text: "Do you prefer contemporary music or are oldies?",
    input_type: "radio",
    options: [
      { value: "Contemporary", label: "Contemporary" },
      { value: "Oldies", label: "Oldies" },
    ],
  },
];

export const App = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [answers, setAnswers] = useState([]);

  /////Keep track of which question is next////
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentQuestionNumber = currentQuestion + 1;
    setcurrentQuestion(currentQuestionNumber);

    /////Save answers////
    let currentAnswer = {};
    currentAnswer[currentQuestionNumber] = userInput;

    updateAnswer([currentQuestionNumber, userInput]);
    setUserInput("");
  };

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const resetForm = () => {
    setcurrentQuestion(0);
    setAnswers([]);
    window.location.reload(false);
  };

  // const handleReset = () => {
  //   //H nollställer setAnswer när ropa den?
  // };

  const updateAnswer = (updatedAnswer) => {
    //H uppdaterar vaddå,funktionen setAnswers?
    console.log("funkar updatedAnswer", updatedAnswer);

    setAnswers((answers) => [...answers, ...updatedAnswer]);
  };

  // const handleUserChoices = () => {
  //   setUserInput("");
  // };

  // const handleUserNameInputChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // Du kan skicka in ett defaultväde i useState, nu använder du en tom sträng... Vad skulle du kunna skicka in istället?
  // Du behöver en funktion som kan hantera när formuläret submittas. Fundera på vad den ska innehålla och göra.

  // const handleSubmit = event => {
  //    event.preventDefault();

  return (
    <form className="main" onSubmit={(e) => handleFormSubmit(e)}>
      {currentQuestion === 0 && (
        <section className="container">
          <Startpage />
          <div className="btn">
            <button type="submit">Let's begin!</button>
          </div>
        </section>
      )}
      {currentQuestion > 0 && currentQuestion < 5 && (
        <section className="container">
          <Types
            {...questionsData[currentQuestion]}
            onChange={handleUserInputChange}
            userInput={userInput}
          />

          <div className="btn">
            <button type="submit">Next question</button>
          </div>
        </section>
      )}
      {currentQuestion === 5 && (
        <section className="container">
          <Summary
            answers={answers}
            setAnswers={setAnswers}
            reset={resetForm}
          />
        </section>
      )}
    </form>
  );
};
