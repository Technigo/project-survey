import React, { useState, useRef } from "react";

import { Header } from "./components/Header";
import { TextInput } from "./components/TextInput";
import { Rangeslider } from "./components/Rangeslider";
import { DropDown } from "./components/DropDown";
import { Radio } from "./components/Radio";
import { Button } from "./components/Button";
import { Summary } from "./components/Summary";
import { Footer } from "./components/Footer";
import { ScrollButton} from "./components/ScrollButton"

export const App = () => {
  const [summary, setSummary] = useState(false);
  const [populationAge, setPopulationAge] = useState("");
  const [userInput, setUserInput] = useState("");
  const [futureExpectations, setFutureExpectations] = useState("");
  const [yearsToMars, setYearsToMars] = useState("");
  const q1 = useRef(null),
    q2 = useRef(null),
    q3 = useRef(null),
    q4 = useRef(null);
  

  const changeState = () => {
    if (
      userInput === "" ||
      futureExpectations === "" ||
      yearsToMars === "" ||
      populationAge === ""
    ) {
      alert("Please answer all questions!");
      return false;
    } else if (summary === false) {
      return true;
    } else {
      setUserInput("");
      setFutureExpectations("");
      setYearsToMars("");
      return false;
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <Header title="The FUTURE" />
      </header>
      <ScrollButton  
        ref1={q1}
        ref2={q2}
        ref3={q3}
        ref4={q4}
      />
      <form onSubmit={(event) => event.preventDefault()}>
  
        {/*When summary === true a summary will be shown*/}
        {summary && (
          <Summary
            userInput={userInput}
            futureExpectations={futureExpectations}
            yearsToMars={yearsToMars}
            populationAge={populationAge}
          />
        )}

        {/*When summary !== true the form with questions will be shown*/}
        {!summary && (
          <>
            <h2>Let's talk about the future!</h2>
            <div className="text-input" ref={q1}>
              <TextInput userInput={userInput} setUserInput={setUserInput} />
            </div>
            <div className="range-slider" ref={q2}>
              <Rangeslider
                popluationAge={populationAge}
                setPopulationAge={setPopulationAge}
                min="0"
                max="100"
              />
            </div>
            <div className="drop-down" ref={q3}>
              <DropDown
                option1="0-10 years"
                option2="10 to 20 years"
                option3="over 20 years"
                option4="over 100 years"
                option5="Never"
                yearsToMars={yearsToMars}
                setYearsToMars={setYearsToMars}
              />
            </div>
            <div className="radio-buttons" ref={q4}>
              <Radio
                value1="synthetic food"
                value2="flying cars"
                value3="cyborg society"
                value4="cool gadgets"
                futureExpectations={futureExpectations}
                setFutureExpectations={setFutureExpectations}
              />
            </div>
          </>
        )}

        {/*OnClick calls a function that toggles between true and false
            state */}
        <Button
          onClick={() => {
            setSummary(changeState());
          }}
          value={summary}
        />
      </form>

      <footer className="footer">
        <Footer copyRight="&copy; Pauline Andersson 2021" />
      </footer>
    </div>
  );
};
