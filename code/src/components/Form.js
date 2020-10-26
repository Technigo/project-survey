import React, { useState } from 'react';

import Header from "./Header";
import Checkbox from "./Checkbox";
import Text from "./Text";
import Dropdown from './Dropdown';
import Radiobutton from "./Radiobutton";
import Submit from "./Submit";
import Summary from "./Summary";
import Reload from "./Reload";

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
