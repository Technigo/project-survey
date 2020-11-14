import React, { useState } from "react";

import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Summary from "./Summary";

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [training, setTraining] = useState("");
  const [question, setQuestion] = useState("Question1");

  const questionList = ["Question1", "Question2", "Question3", "Summary"];

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleTrainingChange = (event) => {
    setTraining(event.target.value);
  };

  // const handleTrainingChange = (event) => {
  //   setTraining(event.target.value);
  //   // training.includes(trainingValue)
  //   //   ? setTraining(training.filter((item) => item !== trainingValue))
  //   //   : setTraining([...training, trainingValue]);
  // };

  const handleNextQuestion = (event) => {
    event.preventDefault();
    const nextQuestion = questionList.indexOf(question);
    setQuestion(questionList[nextQuestion + 1]);
  };

  return (
    <>
      {question !== "Summary" ? (
        <form className="form-container" onSubmit={handleNextQuestion}>
          {question === "Question1" && (
            <div tabIndex="0">
              <h2>Ready to start your journey?</h2>
              <h3>Where would you like to train?</h3>
              <Question1 city={city} onCityChange={handleCityChange} />
            </div>
          )}

          {question === "Question2" && (
            <div tabIndex="0">
              <h3>What would you like to train?</h3>
              <Question2
                training={training}
                onTrainingChange={handleTrainingChange}
              />
            </div>
          )}

          {question === "Question3" && (
            <div tabIndex="0">
              <h3>For more information</h3>
              <Question3 userName={name} onNameChange={handleNameChange} />
            </div>
          )}
          <button className="submit-button" type="submit">
            Next
          </button>
        </form>
      ) : (
        <div tabIndex="0">
          <Summary name={name} training={training} city={city} />
        </div>
      )}
    </>
  );
};
export default Form;
