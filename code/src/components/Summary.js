import React from 'react';

const Summary = ({ inhabitants, ageCategory, stageArtCategory, proposal, profession }) => {
  return (
    <article className="summary-question-container">
      <ul className="summary-user-answers" tabIndex="0">
        <li>Size of city: {inhabitants}</li>
        <li>Age: {ageCategory}</li>
        <li>Post Covid-19 stage art wishes: {stageArtCategory}</li>
        <li>Your thoughts: {proposal}</li>
        <li>Your profession: {profession}</li>
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