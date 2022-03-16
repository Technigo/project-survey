import React from "react"

import { RandomUserName } from '../RandomChoices'

const QuestionSelectMenuSnack = (props) => {
  const { userName, snack, onSnackChange, onStepChange } = props

  return (
    <>
      <label htmlFor="snack"><h1>I offer you a snack, {userName ? userName : RandomUserName()}. What do you choose between these options?</h1></label>
        <select onChange={onSnackChange} id="gender" value={snack}>
          <option value="" disabled>--Please select an option--</option>
          <option value="chocolate bar">chocolate bar</option>
          <option value="candies">candies</option>
          <option value="nuts">nuts</option>
        </select>
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionSelectMenuSnack
