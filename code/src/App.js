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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onNameChange = (e) => {
    console.log(`Name: ${e.target.value}`);
    setName(e.target.value);
  };

  const onWhichWeekChange = (e) => {
    console.log(e.target.value);
    setWhichWeek(e.target.value);
  };

  const onTimeOrRoundsChange = (e) => {
    console.log(e.target.value);
    setTimeOrRounds(e.target.value);
  };

  const onResultChange = (e) => {
    console.log(e.target.value);
    setResult(e.target.value);
  };

  const onQuestionIncrease = () => {
    setQuestion(question + 1);
  };

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
          <button onClick={onQuestionIncrease}>Next Question</button>
        </div>
      </>
    );
  } else  {
    return (
      <>
        <div className="survey-container">
          <Header />
          <Summary value={name} value={whichWeek} value={result} />;
        </div>
      </>
    );
  }
};


