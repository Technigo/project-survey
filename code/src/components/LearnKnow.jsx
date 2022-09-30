import React from 'react'

export const LearnKnow = ({ setLearnKnow }) => {
  return (
    <div className="question-container">
      <h2 className="question-heading">If you had to choose, would you rather hire someone who: </h2>
      <div className="radio-container">
        <label className="radio-label" htmlFor="team">
          <input
            type="radio"
            id="team"
            name="learnKnow"
            value="learn"
            onChange={(e) => setLearnKnow(e.target.value)}
            required />
      Eager to learn
        </label>
        <label className="radio-label" htmlFor="indie">
          <input
            type="radio"
            id="indie"
            name="learnKnow"
            value="know"
            onChange={(e) => setLearnKnow(e.target.value)}
            required />
          Knows everything already
        </label>
      </div>
    </div>
  )
};