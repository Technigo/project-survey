import React from "react"

import { RandomUserName } from '../RandomChoices'

const snackItems = ["chocolates pieces", "candies", "nuts"]

const QuestionSelectMenuSnack = (props) => {
  const { userName, snack, onSnackChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="snack"><h1>Select a snack between these options, {userName ? userName : RandomUserName()}</h1></label>
        <select className="select-input" onChange={onSnackChange} id="gender" value={snack}>
          <option value="" disabled>--Please select an option--</option>
          {snackItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </div>
  )
}

export default QuestionSelectMenuSnack
