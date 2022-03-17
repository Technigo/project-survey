import React from "react"

import { RandomFriendName } from '../RandomChoices'

const sportItems = ["football", "hockey", "baseball", "floorball", "basketball"]

const QuestionSelectMenuSports = (props) => {
  const { friendName, sport, onSportChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="sport"><h1>Maybe you would like to watch some game with {friendName ? friendName : RandomFriendName()}: what would be the sport then?</h1></label>
        <select onChange={onSportChange} id="sport" value={sport}>
          <option value="" disabled>--Please select an option--</option>
          {sportItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </div>
  )
}

export default QuestionSelectMenuSports
