import React from 'react';

//change stageArtCategory to be the function??
//stageArtCategory needs a join()'' ?? javascript ----> check it. It's an array
const Summary = ({ inhabitants, ageCategory, stageArtCategory, proposal, professions }) => {
  return (
    <article className="summary-question-container">
      <ul className="summary-user-answers" tabIndex="0">
        <li>Size of city: {inhabitants}</li>
        <li>Age: {ageCategory}</li>
        <li>Post Covid-19 stage art wishes: {stageArtCategory}</li> 
        <li>Your thoughts: {proposal}</li>
        <li>Your overlapping professions: {professions}</li>
      </ul>
      <button
        type="button"
        className="button-retake-survey"
        onClick={() => window.location.reload()}
      >
        Retake survey
      </button>
    </article>
  )
}

export default Summary