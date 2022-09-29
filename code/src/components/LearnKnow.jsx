import React from 'react'

export const LearnKnow = ({ setLearnKnow }) => {
  return (
    <div className="learn-know-container">
      <h2 className="quest-heading">If you had to choose, would you rather hire someone who: </h2>
      <label htmlFor="team">Eager to learn
        <input
          type="radio"
          id="team"
          name="learnKnow"
          value="learn"
          onChange={(e) => setLearnKnow(e.target.value)} />
      </label>
      <label htmlFor="indie">Knows everything already
        <input
          type="radio"
          id="indie"
          name="learnKnow"
          value="know"
          onChange={(e) => setLearnKnow(e.target.value)} />
      </label>
    </div>
  )
}
