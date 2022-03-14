import React from "react"

const QuestionSelectMenuSports = (props) => {
  const { friendName, sport, onSportChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question11"></div>
      </div>
      <form>
      <label htmlFor="sport"><h1>Maybe you would like to watch some game with {friendName}: what would be the sport then?</h1></label>
        <select onChange={onSportChange} id="sport" value={sport}>
          <option value="" disabled>--Please select an option--</option>
          <option value="football">football</option>
          <option value="hockey">hockey</option>
          <option value="baseball">baseball</option>
          <option value="floorball">floorball</option>
          <option value="basketball">basketball</option>
        </select>
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionSelectMenuSports
