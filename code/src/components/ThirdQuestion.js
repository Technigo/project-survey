import React from "react"

const ThirdQuestion = ({
  locationInput,
  onLocationInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  return (
    <form>
      <label className="question">
        Which spaceships would you like to be in?
      </label>
      <select
        className="input-box"
        onChange={onLocationInputChange}
        value={locationInput}
      >
        <option value=""> Select a spaceship </option>
        <option value="Arcadia"> Arcadia </option>
        <option value="Phoenix"> Phoenix </option>
        <option value="Battlestar"> Battlestar </option>
        <option value="Romulus"> Romulus </option>
      </select>
      <div className="button-container">
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          PREVIOUS
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          CONTINUE
        </button>
      </div>
    </form>
  )
}

export default ThirdQuestion
