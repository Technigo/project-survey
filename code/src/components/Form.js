import React, { useState } from 'react'


import Header from "./Header"
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Submit from "./Submit"

import "./form.css"

const Form = () => {
  //all the state hooks
  const [text, setText] = useState("");
  const [distance, setDistance] = useState("");
  const [answer, setAnswer] = useState("");

  //lecture stuff: whatever we pass in as argument will update the text via setText function
  //if the function starts with on, then it should be only used within the component
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


  return (
    <form className="app-container">
      <Header
        title="We like to move it!"
        subtitle="your favourite moving company"
      />
      <Question1
        questionText="Where do you live?"
        questionAnswer={text}
        onTextChange={handleTextChange}
      />
      <Question2
        questionText="How far are you moving?"
        questionAnswer={distance}
        onDistanceChange={handleDistanceChange}
      // options={dropDownOptionsArr}
      />
      <Question3
        questionText="Do you want to order our cleaning service as well?"
        questionAnswer={answer}
        onAnswerChange={handleAnswerChange}
      />
      <Submit text="Submit" />
      {/* <Footer /> */}
    </form>
  )
}

export default Form; 
