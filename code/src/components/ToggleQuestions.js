import React, { useState } from "react";

import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Question4 } from "./Question4";
import { Summary } from "./Summary";
import { DirectionButton } from "./DirectionButton";
import { ProgressBar } from "./ProgressBar";
import { ToggleSubQuestions } from "./ToggleSubQuestions";

let i = 0;

export const ToggleQuestions = ({ questionNumber, setQuestionNumber }) => {
  const [populationAge, setPopulationAge] = useState("");
  const [userInput, setUserInput] = useState("");
  const [futureChoice, setFutureChoice] = useState("");
  const [yearsToMars, setYearsToMars] = useState("");
  const [moreFutureChoices, setMoreFutureChoices] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  /*Returns a popup to tell the user to add a answer if s/he didn't and if the user
  did answer it sets the nextQuestion to the right state for showing the next question
 */
  const onNextButtonClick = () => {
    const handleValidation = () => {
      if (
        (questionNumber === "Question1" && userInput === "") ||
        (questionNumber === "Question2" && populationAge === "") ||
        (questionNumber === "Question3" && yearsToMars === "") ||
        (questionNumber === "Question4" && futureChoice === "") ||
        (questionNumber === "Question5" && moreFutureChoices.length === 0)
      ) {
        alert("Please answer the question.");
      } else {
        setNextQuestion();
      }
    };
    handleValidation();
  };

  /* sets questionnumber when clicking "next" button */
  const setNextQuestion = () => {
    i++;
    if (i < 6) {
      setQuestionNumber(`Question${i}`);
      setIsSubmit(false);
    } else if (i === 6) {
      setQuestionNumber(`End`);
      setIsSubmit(true);
    } else {
      i = 0;
      resetForm();
    }
    window.scrollTo(0,0)
  };

  /* sets questionnumber when clicking "back" button */
  const onBackButtonClick = () => {
    i === 0 ? i-- : (i = i - 2);
    setNextQuestion(); 
  };

  //resets all inputs
  const resetForm = () => {
    setUserInput("");
    setPopulationAge("");
    setYearsToMars("");
    setFutureChoice("");
    setQuestionNumber("");
    setMoreFutureChoices([]);
    setIsSubmit(false);
  };

  return (
    <>
      {/*If the isSubmit !== true (eg it's false) */}
      {!isSubmit && (
          <main>
          {/*While isSubmit is false the question with the corresponding number
        of questionNumber will be shown*/}
          {questionNumber === "Question1" && (
            <section className="question" aria-labelledby="Question1">
              <h2 className="question-heading" id="Question1">
                Your thoughts
              </h2>
              <Question1 userInput={userInput} setUserInput={setUserInput} />
            </section>
          )}

          {questionNumber === "Question2" && (
            <section className="question" aria-labelledby="Question2">
              <h2 className="question-heading" id="Question2">
                We keep getting older...
              </h2>
              <Question2
                min="0"
                max="100"
                popluationAge={populationAge}
                setPopulationAge={setPopulationAge}
              />
            </section>
          )}

          {questionNumber === "Question3" && (
            <section className="question" aria-labelledby="Question3">
              <h2 className="question-heading" id="Question3">
                What about space?
              </h2>
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

          {questionNumber === "Question4" && (
            <section className="question" aria-labelledby="Question4">
              <h2 className="question-heading" id="Question4">
                If the Sci-Fi movies were right...
              </h2>
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
            </section>
          )}

          {questionNumber === "Question5" && (
            <section className="question" aria-labelledby="Question5">
              <h2 className="question-heading" id="Question5">
                Interesting, tell me more!
              </h2>
              <ToggleSubQuestions
                futureChoice={futureChoice}
                setMoreFutureChoices={setMoreFutureChoices}
                moreFutureChoices={moreFutureChoices}
              />
            </section>
          )}
        </main>
      )}

      {/*If the state of isSubmit === true */}
      {isSubmit && (
        <>
          <Summary
            userInput={userInput}
            futureChoice={futureChoice}
            yearsToMars={yearsToMars}
            populationAge={populationAge}
            moreFutureChoices={moreFutureChoices}
          />
        </>
      )}

      {/*Shows progressionbar on questions done */}
      <ProgressBar questionNumber={questionNumber} />

      {/*Shows the next question or summary or a chance to redo the form if
      you're done, and a back button for all sections exept the start */}
      <div className="direction-button__container">
        {i !== 0 && (
          <DirectionButton
            onButtonClick={onBackButtonClick}
            direction="back"
            i={i}
          />
        )}
        <DirectionButton
          onButtonClick={onNextButtonClick}
          direction="forward"
          i={i}
        />
      </div>
    </>
  );
};
