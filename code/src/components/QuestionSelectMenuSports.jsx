import React from "react"

import { RandomFriendName } from '../RandomChoices'

const QuestionSelectMenuSports = (props) => {
  const { friendName, sport, onSportChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question11"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
      <label htmlFor="sport"><h1>Maybe you would like to watch some game with {friendName ? friendName : RandomFriendName()}: what would be the sport then?</h1></label>
        <select onChange={onSportChange} id="sport" value={sport}>
          <option value="" disabled>--Please select an option--</option>
          <option value="football">football</option>
          <option value="hockey">hockey</option>
          <option value="baseball">baseball</option>
          <option value="floorball">floorball</option>
          <option value="basketball">basketball</option>
        </select>
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionSelectMenuSports
