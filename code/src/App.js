import React, { useState } from "react";

import { Header } from "./components/Header";
import { Question1 } from "./components/Question1";
import { Question2 } from "./components/Question2";
import { Question3 } from "./components/Question3";
import { Question4 } from "./components/Question4";
import { Summary } from "./components/Summary";
import { ProgressBar } from "./components/ProgressBar";
import { NextButton } from "./components/NextButton";
import { Footer } from "./components/Footer";

let i = 0;

export const App = () => {
  const [populationAge, setPopulationAge] = useState("");
  const [userInput, setUserInput] = useState("");
  const [futureExpectations, setFutureExpectations] = useState("");
  const [yearsToMars, setYearsToMars] = useState("");
  const [nextQuestion, setNextQuestion] = useState("");

  /*Returns a popup to tell the user to add a answer if s/he didn't and if the user
  did answer it sets the nextQuestion to the right state for showing the next question
  (or summary) */
  const handleAnswer = () => {
    if (
      (nextQuestion === "Question1" && userInput === "") ||
      (nextQuestion === "Question2" && populationAge === "") ||
      (nextQuestion === "Question3" && yearsToMars === "") ||
      (nextQuestion === "Question4" && futureExpectations === "")
    ) {
      alert("Please answer the question!");
    } else {
      i++;
      if (i < 5) {
        setNextQuestion(`Question${i}`);
      } else if (i === 5) {
        setNextQuestion("Summary");
      } else {
        i = 0;
        resetForm();
      }
    }
  };

  //resets all inputs
  const resetForm = () => {
    setUserInput("");
    setPopulationAge("");
    setYearsToMars("");
    setFutureExpectations("");
    setNextQuestion("");
  };

  return (
    <div className="wrapper">
      <header className="header">
        <Header title="The FUTURE" />
      </header>

      {/*While nextQuestion isn't "Summary" new questions will be shown 
      the form with questions will be shown*/}
      {nextQuestion !== "Summary" && (
        <>
          <h2 className="question-heading">Let's talk about the future!</h2>

          {nextQuestion === "Question1" && (
            <section className="question" id="Question1">
              <Question1 userInput={userInput} setUserInput={setUserInput} />
            </section>
          )}

          {nextQuestion === "Question2" && (
            <section className="question" id="Question2">
              <Question2
                min="0"
                max="100"
                popluationAge={populationAge}
                setPopulationAge={setPopulationAge}
              />
            </section>
          )}

          {nextQuestion === "Question3" && (
            <section className="question" id="Question3">
              <Question3
                yearsToMars={yearsToMars}
                setYearsToMars={setYearsToMars}
              />
            </section>
          )}

          {nextQuestion === "Question4" && (
            <section className="question" id="Question4">
              <Question4
                futureExpectations={futureExpectations}
                setFutureExpectations={setFutureExpectations}
              />
            </section>
          )}
        </>
      )}

      {/*When nextQuestion === "Summary" a summary will be shown*/}
      {nextQuestion === "Summary" && (
        <Summary
          userInput={userInput}
          futureExpectations={futureExpectations}
          yearsToMars={yearsToMars}
          populationAge={populationAge}
        />
      )}

      <ProgressBar nextQuestion={nextQuestion} />

      {/*Shows the next question or summary or a chance to redo the form if
      you're done */}
      <NextButton handleAnswer={handleAnswer} i={i} />

      <footer className="footer">
        <Footer copyRight="&copy; Pauline Andersson 2021" />
      </footer>
    </div>
  );
};
