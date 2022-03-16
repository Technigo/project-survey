import React from "react"

import { RandomUserName } from '../RandomChoices'

const QuestionSelectMenuGender = (props) => {
  const { userName, gender, onGenderChange, onStepChange } = props

  return (
    <>
      <label htmlFor="gender"><h1>{userName ? userName : RandomUserName()}, what would you like the main character to have as a gender?</h1></label>
        <select onChange={onGenderChange} id="gender" value={gender}>
          <option value="" disabled>--Please select an option--</option>
          <option value="feminine">feminine</option>
          <option value="masculine">masculine</option>
          <option value="non-binary">non-binary</option>
        </select>
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionSelectMenuGender
