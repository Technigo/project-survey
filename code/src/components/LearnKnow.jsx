import React from 'react'

export const LearnKnow = ({ setLearnKnow }) => {
  return (
    <div className="question-container">
      <h2 className="question-heading">What personal trait do you value the <span className="underline">most</span>?</h2>
      <div className="radio-container">
        <label className="radio-label" htmlFor="team">
          <input
            type="radio"
            id="team"
            name="learnKnow"
            value="is eager to learn"
            onChange={(e) => setLearnKnow(e.target.value)}
            required />
      Eager to learn
        </label>
        <label className="radio-label" htmlFor="indie">
          <input
            type="radio"
            id="indie"
            name="learnKnow"
            value="knows everything already"
            onChange={(e) => setLearnKnow(e.target.value)}
            required />
          Knows everything already
        </label>
      </div>
    </div>
  )
};