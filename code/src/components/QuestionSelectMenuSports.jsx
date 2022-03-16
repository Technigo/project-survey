import React from "react"

import { RandomFriendName } from '../RandomChoices'

const QuestionSelectMenuSports = (props) => {
  const { friendName, sport, onSportChange, onStepChange } = props

  return (
    <>
      <label htmlFor="sport"><h1>Maybe you would like to watch some game with {friendName ? friendName : RandomFriendName()}: what would be the sport then?</h1></label>
        <select onChange={onSportChange} id="sport" value={sport}>
          <option value="" disabled>--Please select an option--</option>
          <option value="football">football</option>
          <option value="hockey">hockey</option>
          <option value="baseball">baseball</option>
          <option value="floorball">floorball</option>
          <option value="basketball">basketball</option>
        </select>
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionSelectMenuSports
