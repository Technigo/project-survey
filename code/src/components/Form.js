import React, { useState } from 'react';


import Header from "./Header";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Submit from "./Submit";
import Summary from "./Summary";

import "./form.css";

const Form = () => {
  //all the state hooks
  const [displaySummary, setDisplaySummary] = useState(false);
  const [text, setText] = useState("");
  const [distance, setDistance] = useState({});
  const [answer, setAnswer] = useState("");

  //if the function starts with "on", then it should be only used within the component
  //if the function is passed to other components, use "handle"NameChange 
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
    setDisplaySummary(true);
  };


  return (
    <form className="app-container" onSubmit={handleSubmit}>
      <Header
        title="We like to move it!"
        subtitle="your favourite moving company"
      />
      <Question1
        questionText1="Where do you live?"
        questionAnswer1={text}
        onTextChange={handleTextChange}
      />
      <Question2
        questionText2="How far are you moving?"
        questionAnswer2={distance}
        onDistanceChange={handleDistanceChange}
      // options={dropDownOptionsArr}
      />
      <Question3
        questionText3="Do you want to order our cleaning service as well?"
        questionAnswer3={answer}
        onAnswerChange={handleAnswerChange}
      />
      <Submit />
      {displaySummary && (
        <Summary />
      )}
    </form>
  );
};

export default Form; 
