import React, { useState } from "react";

import { Radio } from "./components/Radio";
import { DropDown } from "./components/DropDown";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";
import { Summary } from "./components/Summary";

export const App = () => {
  const [summary, setSummary] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [futureExpectations, setFutureExpectations] = useState("");
  const [years, setYears] = useState("");

  const setValue = () => {
    if (userInput === "" || futureExpectations === "" || years === "") {
      alert("Please answer all questions!");
      return false;
    } else if (summary === false) {
      return true;
    } else {
      setUserInput("");
      setFutureExpectations("");
      setYears("");
      return false;
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <Header title="The FUTURE" />
      </header>

      <form onSubmit={(event) => event.preventDefault()}>
        {/*When summary === true a summary will be shown*/}
        {summary && (
          <Summary
            userInput={userInput}
            futureExpectations={futureExpectations}
            years={years}
          />
        )}

        {/*When summary !== true the form with questions will be shown*/}
        {!summary && (
          <><h2>Let's talk about the future!</h2>
            <div className="text-input">
              <TextInput userInput={userInput} setUserInput={setUserInput} />
            </div>
            <div className="drop-down">
              <DropDown
                option1="0-10 years"
                option2="10 to 20 years"
                option3="over 20 years"
                option4="over 100 years"
                option5="Never"
                years={years}
                setYears={setYears}
              />
            </div>
            <div className="radio-buttons">
              <Radio
                value1="Mars living"
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
            setSummary(setValue());
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
