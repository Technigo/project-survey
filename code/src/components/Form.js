import React, { useState } from 'react';

import Header from "./Header";
import Checkbox from "./Checkbox";
import Text from "./Text";
import DropDown from './DropDown';
import Question3 from "./Question3";
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

  //if the function starts with "on", then it should only be used within the component
  //if the function is passed to other components, use "handle" prefix 
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
            subtitle="your favourite moving company in Skåne"
          />
          <Checkbox
            isBoxChecked={checkBox}
            onCheckBoxChange={handleCheckBoxChange}
          />
          <Text
            questionText1="Name and surname"
            questionAnswer1={text}
            onTextChange={handleTextChange}
          />
          <DropDown
            dropdownText="How far are you moving?"
            dropdownAnswer={distance}
            onDistanceChange={handleDistanceChange}
          />
          <Question3
            questionText3="We are fond of reusing cardboard boxes. 
            Would you like to order them for your move?"
            questionAnswer3={answer}
            onAnswerChange={handleAnswerChange}
          />
          <Submit />
        </div>
      )}

      {displaySummary && (
        <>
          <Summary
            questionAnswer1={text}
            questionAnswer2={distance}
            questionAnswer3={answer}
            isBoxChecked={checkBox.join(` , `)}
          />
          <Reload />
        </>
      )}
    </form>
  );
};

export default Form; 
