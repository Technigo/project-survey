import React from 'react'

export const FinalQuestion = ({zodiac, question, setQuestion}) => {

  return(
    <div className="question-wrapper">
      {/* <p>{zodiac}, that's interesting!</p> */}
      <p>Would you like to reveal your love match?</p>
      <div className="radio-wrapper" role="radiogroup">
        <input
          type="radio"
          id="yes"
          value="yes"
          name="question"
          onChange={event => setQuestion(event.target.value)}
          checked={question === "yes"}
          required
        />
        <label 
          for="yes" 
          role="radio" 
          tabIndex="0"
          aria-checked="false">
          Yes, I'm ready to find the one!
        </label>
        <input
          type="radio"
          id="no"
          value="no"
          name="question"
          onChange={event => setQuestion(event.target.value)}
          checked={question === "no"}
          required
        />
        <label 
          for="no" 
          role="radio" 
          tabIndex="-1"
          aria-checked="false"> 
          No... Not today.
        </label>
      </div>
    </div>
  )
}