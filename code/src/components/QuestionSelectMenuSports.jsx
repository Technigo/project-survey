import React from "react"

import { RandomFriendName } from '../RandomChoices'

const sportItems = ["football", "hockey", "baseball", "floorball", "basketball"]

const QuestionSelectMenuSports = (props) => {
  const { friendName, sport, onSportChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="sport"><h1>Select the sport you would watch some game with {friendName ? friendName : RandomFriendName()}</h1></label>
        <select className="select-input" onChange={onSportChange} id="sport" value={sport}>
          <option value="" disabled>--Please select an option--</option>
          {sportItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </div>
  )
}

export default QuestionSelectMenuSports
