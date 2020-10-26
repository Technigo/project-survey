import React, { useState } from 'react';

import Header from "components/Header";
import Checkbox from "components/Checkbox";
import Text from "components/Text";
import Dropdown from "./Dropdown";
import Radiobutton from "components/Radiobutton";
import Submit from "components/Submit";
import Summary from "components/Summary";
import Reload from "components/Reload";

import "./form.css";

const Form = () => {
  //all state hooks
  const [displayForm, setDisplayForm] = useState(true);
  const [displaySummary, setDisplaySummary] = useState(false);
  const [checkBox, setCheckBox] = useState([]);
  const [text, setText] = useState("");
  const [distance, setDistance] = useState({});
  const [answer, setAnswer] = useState("");

  //all state functions
  const handleCheckBoxChange = (newCheck) => {
    checkBox.includes(newCheck)
      ? setCheckBox(checkBox.filter(item => item !== newCheck))
      : setCheckBox([...checkBox, newCheck]);
  };

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleDistanceChange = (newDistance) => {
    setDistance(newDistance);
  };

  const handleAnswerChange = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayForm(false);
    setDisplaySummary(true);
  };

  return (
    <form className="app-container" onSubmit={handleSubmit}>
      {displayForm && (
        <div className="form-container">
          <Header
            title="We like to move you!"
            subtitle="&#9734; your favourite moving company in Lund &#9734;"
          />
          <Checkbox
            isBoxChecked={checkBox}
            onCheckBoxChange={handleCheckBoxChange}
          />
          <Text
            questionText="Name and surname:"
            textAnswer={text}
            onTextChange={handleTextChange}
          />
          <Dropdown
            dropdownText="How far are you moving?"
            dropdownAnswer={distance}
            onDistanceChange={handleDistanceChange}
          />
          <Radiobutton
            radioText="Would you like to rent cardboard boxes?"
            radioAnswer={answer}
            onAnswerChange={handleAnswerChange}
          />
          <Submit />
        </div>
      )}

      {displaySummary && (
        <>
          <Summary
            textAnswer={text}
            dropdownAnswer={distance}
            radioAnswer={answer}
            isBoxChecked={checkBox.join(`, `)}
          />
          <Reload />
        </>
      )}
    </form>
  );
};

export default Form; 
