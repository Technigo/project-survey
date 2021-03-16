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
  const [range, setRange] = useState();
  const [type, setType] = useState();

  const setValue = () => {
    return summary === false ? true : false;
  };

  return (
      <div className="wrapper">

        <header className="header">
          <Header title="Some title here" />
        </header>

        <form onSubmit={(event) => event.preventDefault()}>

          {/*When summary === true a summary will be shown*/}
          {summary && (
            <Summary userInput={userInput} range={range} type={type} />
          )}

          {/*When summary !== true the form with questions will be shown*/}
          {!summary && (
            <>
              <div className="text-input">
                <TextInput userInput={userInput} setUserInput={setUserInput} />
              </div>
              <div className="drop-down">
                <DropDown
                  option1="1"
                  option2="2"
                  option3="3"
                  option4="4"
                  option5="5"
                  type={type}
                  setType={setType}
                />
              </div>
              <div className="radio-buttons">
                <Radio
                  value1="10-18"
                  value2="8-9"
                  value3="0-1"
                  value4="38-90"
                  range={range}
                  setRange={setRange}
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
