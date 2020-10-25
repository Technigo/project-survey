import React, { useState } from 'react';

import Header from "./Header";
import Checkbox from "./Checkbox";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Submit from "./Submit";
import Summary from "./Summary";

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
    setCheckBox(newCheck);
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
          <Question1
            questionText1="Name"
            questionAnswer1={text}
            onTextChange={handleTextChange}
          />
          <Question2
            questionText2="How far are you moving?"
            questionAnswer2={distance}
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
        //Q - how does this work? Why can I use props "defined" in other 
        //components here as well?
        <Summary
          questionAnswer1={text}
          questionAnswer2={distance}
          questionAnswer3={answer}
        />
      )}
    </form>
  );
};

export default Form; 
