import React, { useState } from "react";

import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Question4 } from "./Question4";
import { Summary } from "./Summary";
import { NextButton } from "./NextButton";
import { ToggleSubQuestions } from "./ToggleSubQuestions";

let i = 0;

export const ToggleQuestions = ({ nextQuestion, setNextQuestion }) => {
  const [populationAge, setPopulationAge] = useState("");
  const [userInput, setUserInput] = useState("");
  const [futureChoice, setFutureChoice] = useState("");
  const [yearsToMars, setYearsToMars] = useState("");
  const [isSubQuestion, setIsSubQuestion] = useState(false);
  const [moreFutureChoices, setMoreFutureChoices]= useState("")

  /*Returns a popup to tell the user to add a answer if s/he didn't and if the user
  did answer it sets the nextQuestion to the right state for showing the next question
  (or summary) */
  const handleAnswer = () => {
    if (
      (nextQuestion === "Question1" && userInput === "") ||
      (nextQuestion === "Question2" && populationAge === "") ||
      (nextQuestion === "Question3" && yearsToMars === "") ||
      (nextQuestion === "Question4" && futureChoice=== "") ||
      (nextQuestion === "Question4" && isSubQuestion === true && moreFutureChoices === "")
    ) {
      alert("Please answer the question!");
    } else {
      i++;
      if (i < 5) {
        setNextQuestion(`Question${i}`);
      } else if (i === 5) {
        setIsSubQuestion(true);
      } else if (i === 6) {
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
    setFutureChoice("");
    setNextQuestion("");
    setIsSubQuestion(false);
    setMoreFutureChoices("");
  };

  return (
    <>
      {/*While nextQuestion is a questionNumber new questions will be shown 
      in the form*/}
      {console.log(nextQuestion)}
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
            valueArray={[
              "0-10 years",
              "10 to 20 years",
              "over 20 years",
              "over 100 years",
              "Never",
            ]}
            yearsToMars={yearsToMars}
            setYearsToMars={setYearsToMars}
          />
        </section>
      )}

      {nextQuestion === "Question4" && (
        <section className="question" id="Question4">
          {isSubQuestion ? (
            <ToggleSubQuestions 
            futureChoice={futureChoice}
            setMoreFutureChoices= {setMoreFutureChoices} 
            moreFutureChoices={moreFutureChoices}
            />
          ) : (
            <Question4
              optionArray={[
                "synthetic food",
                "flying cars",
                "cyborg society",
                "cool gadgets",
              ]}
              futureChoice={futureChoice}
              setFutureChoice={setFutureChoice}
            />
          )}
        </section>
      )}

      {/*When nextQuestion === "Summary" a summary will be shown*/}
      {nextQuestion === "Summary" && (
        <Summary
          userInput={userInput}
          futureChoice={futureChoice}
          yearsToMars={yearsToMars}
          populationAge={populationAge}
          moreFutureChoices= {moreFutureChoices}  
        />
      )}

      {/*Shows the next question or summary or a chance to redo the form if
      you're done */}
      <NextButton handleAnswer={handleAnswer} i={i} />
    </>
  );
};
