import React from 'react'

export const LearnKnow = ({ learnKnow, setLearnKnow }) => {
  const handleLearnKnowChange = (event) => {
    setLearnKnow(event.target.value);
  }
  return (
    <div className="learn-know-container">
      <h2 className="quest-heading">If you would have to choose. Would you rather hire someone who: </h2>
      <select
        className="dropdown-menu"
        value={learnKnow}
        onChange={handleLearnKnowChange}>
        <option value="">Choose one:</option>
        <option value="learn">is eager to learn more</option>
        <option value="know">knows everything already</option>
      </select>
    </div>
  )
}
