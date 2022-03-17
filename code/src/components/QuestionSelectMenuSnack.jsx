import React from "react"

import { RandomUserName } from '../RandomChoices'

const snackItems = ["chocolate bar", "candies", "nuts"]

const QuestionSelectMenuSnack = (props) => {
  const { userName, snack, onSnackChange } = props

  return (
    <>
      <label htmlFor="snack"><h1>I offer you a snack, {userName ? userName : RandomUserName()}. What do you choose between these options?</h1></label>
        <select onChange={onSnackChange} id="gender" value={snack}>
          <option value="" disabled>--Please select an option--</option>
          {snackItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </>
  )
}

export default QuestionSelectMenuSnack
