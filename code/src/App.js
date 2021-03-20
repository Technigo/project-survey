import React, { useState } from "react";

import Header from "./components/Header";
import Hello from "./components/Hello";
import Week from "./components/Week";
import Result from "./components/Result";
import Summary from "./components/Summary";

import "./index.css";

export const App = () => {
  const [name, setName] = useState("");
  const [whichWeek, setWhichWeek] = useState("");
  const [timeOrRounds, setTimeOrRounds] = useState("");
  const [result, setResult] = useState("");
  const [question, setQuestion] = useState(1);
  let [isSubmitted, setIsSubmitted] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onWhichWeekChange = (e) => {
    setWhichWeek(e.target.value);
  };

  const onTimeOrRoundsChange = (e) => {
    setTimeOrRounds(e.target.value);
  };

  const onResultChange = (e) => {
    setResult(e.target.value);
  };

  const onQuestionIncrease = () => {
    setQuestion(question + 1);
  };

  const questionSubmit = () => {
    setIsSubmitted(isSubmitted = true);
  }

  if (isSubmitted === false && question === 1) {
    return (
      <>
        <div className="survey-container">
          <Header />
          <Hello onNameChange={onNameChange} />
          <button onClick={onQuestionIncrease}>Next Question</button>
        </div>
      </>
    );
  } else if (isSubmitted === false && question === 2) {
    return (
      <>
        <div className="survey-container">
          <Header />
          <Week onWhichWeekChange={onWhichWeekChange} />
          <button onClick={onQuestionIncrease}>Next Question</button>
        </div>
      </>
    );
  } else if (isSubmitted === false && question === 3) {
    return (
      <>
        <div className="survey-container">
          <Header />
          <Result
            onTimeOrRoundsChange={onTimeOrRoundsChange}
            onResultChange={onResultChange}
          />
          <button onClick={questionSubmit}>SUBMIT</button>
        </div>
      </>
    );
  } else if (isSubmitted === true ) {
    return (
      <>
        <div className="survey-container">
          <Header />
          <Summary value={name} weekvalue={whichWeek} timeOrRounds={timeOrRounds} result={result} />
        </div>
      </>
    );
  }
};


