import React, { useState } from "react";
import { Radio } from "./components/Radio";
import { DropDown } from "./components/DropDown";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TextInput } from "./components/TextInput";

export const App = () => {
  const [display, setDisplay] = useState("inactive");

  return (
    <div className="wrapper">
      <header className="header">
        <Header title="Some title here" />
      </header>
      <div className={display}>
        <h2>Your answers</h2>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="text-input">
          <TextInput class={display} />
        </div>
        <div className="drop-down">
          <DropDown
            option1="1"
            option2="2"
            option3="3"
            option4="4"
            option5="5"
            class={display}
          />
        </div>
        <div className="radio-buttons">
          <Radio
            value1="10-18"
            value2="8-9"
            value3="0-1"
            value4="38-90"
            class={display}
          />
        </div>
        {/* when this submit button is clicked the state display will be set to "active"
        which also sets different props to "active" and in their turn setting classes to "active".
        This will show users answers and hide the form questions/options. 
        The Submit-button will also change and if it's clicked again it will take the user back to the form*/}
          <button
            onClick={(event) => {
              setDisplay(event.target.value);
            }}
            data-content={(display === "active"?"Redo":"Submit")}
            value={display === "active" ? "inactive" :"active"}
          >
          </button>
      </form>
      <footer className="footer">
        <Footer copyRight="&copy; Pauline Andersson 2021" />
      </footer>
    </div>
  );
};
