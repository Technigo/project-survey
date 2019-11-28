import React from "react";

const TextInput = (props) => {
    const currentQuestion = props.currentQuestion
    const setAnswers = props.setAnswers
    const answers = props.answers
    
    return ( 
      <input
        required
        type='input'
        defaultValue={answers[currentQuestion.index] === null ? currentQuestion['defaultAnswer'] : answers[currentQuestion.index]}
        onChange={event => { 
          let tempAnswers = answers
          tempAnswers[currentQuestion.index] = event.target.value
          setAnswers(tempAnswers)
  
        }}
      />
    )
  }

  export default TextInput

  