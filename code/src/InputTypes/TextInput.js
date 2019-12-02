import React from "react"

const TextInput = ( { currentQuestion, setAnswers, answers, setDummy}) => {
    
    return ( 
      <input
        required
        type='input'
        defaultValue={answers[currentQuestion.index] === null ? currentQuestion['defaultAnswer'] : answers[currentQuestion.index]}
        onChange={event => { 
          let tempAnswers = answers
          tempAnswers[currentQuestion.index] = event.target.value
          setAnswers(tempAnswers)
          setDummy(event.target.value) /* dummy variabel force re-render as setAnswer don't */
        }}
      />
    )
  }

  export default TextInput

  