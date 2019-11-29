import React from "react";

const TextInput = ( { currentQuestion, setAnswers, answers}) => {
    
    return ( 
      <input
        required
        type='input'
        defaultValue={answers[currentQuestion.index] === null ? currentQuestion['defaultAnswer'] : answers[currentQuestion.index]}
        onChange={event => { 
          let tempAnswers = answers
          tempAnswers[currentQuestion.index] = event.target.value
          setAnswers(tempAnswers)
          
          console.log(answers)
        }}
      />
    )
  }

  export default TextInput

  