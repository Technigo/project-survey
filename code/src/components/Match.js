import React from 'react'

export const Match = ({question, setQuestion}) => {

  return(
    <div className="match-wrapper" id="match">
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
          className="match-label"
          for="yes">
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
          className="match-label"
          for="no"> 
          No... Not today.
        </label>
      </div>
      <a href="#reveal">
        <button 
          type="button" 
          className="next-button"
          disabled={question === ''}>
          NEXT
        </button>
      </a>
    </div>
  )
}