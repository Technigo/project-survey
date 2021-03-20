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

  return (
    <>
      <div className="survey-container">
        <Header />
        <Hello onNameChange={onNameChange} />
        <Week onWhichWeekChange={onWhichWeekChange} />
        <Result
          onTimeOrRoundsChange={onTimeOrRoundsChange}
          onResultChange={onResultChange}
        />
        <Summary value={name} value={whichWeek} value={result} />
      </div>
    </>
  );
};
