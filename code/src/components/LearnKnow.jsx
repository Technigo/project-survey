import React from 'react'

export const LearnKnow = ({ learnKnow, setLearnKnow }) => {
  const handleLearnKnowChange = (event) => {
    setLearnKnow(event.target.value);
  }
  return (
    <fieldset className="learn-know-container">
      <h2 className="quest-heading">If you had to choose, would you rather hire someone who: </h2>
      <select
        className="dropdown-menu"
        value={learnKnow}
        onChange={handleLearnKnowChange}>
        <option value="">Choose one:</option>
        <option value="Eager to learn more">is eager to learn new things</option>
        <option value="Knows everything already">knows everything already</option>
      </select>
    </fieldset>
  )
}
