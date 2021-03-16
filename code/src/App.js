import React, { useState } from "react";
import { Radio } from "./components/Radio";
import { DropDown } from "./components/DropDown";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";

export const App = () => {
  const [display, setDisplay] = useState("inactive");

  const setValue = () => {
    return display === "active" ? "inactive" : "active";
  };

  return (
    <div className="wrapper">
      <header className="header">
        <Header title="Some title here" />
      </header>
      <form onSubmit={(event) => event.preventDefault()}>
        <h2 className={`answers-heading ${display}`}>Your answers:</h2>
        <div className="text-input">
          {/*using the Apps state display to pass on to class props in components, which will
        add the active class to display the users answers to the questions*/}
          <TextInput 
            activeClass={display} />
        </div>
        <div className="drop-down">
          <DropDown
            option1="1"
            option2="2"
            option3="3"
            option4="4"
            option5="5"
            activeClass={display}
          />
        </div>
        <div className="radio-buttons">
          <Radio
            value1="10-18"
            value2="8-9"
            value3="0-1"
            value4="38-90"
            activeClass={display}
          />
        </div>
        {/* when this submit button is clicked the state display will be set to "active"
        This will show users answers and hide the form questions/options. 
        The Submit-button will also change and if it's clicked again it will take the user back to the form*/}
        <Button
          onClick={(event) => {
            setDisplay(event.target.value);
          }}
          value={setValue()}
        />
      </form>
      <footer className="footer">
        <Footer copyRight="&copy; Pauline Andersson 2021" />
      </footer>
    </div>
  );
};
