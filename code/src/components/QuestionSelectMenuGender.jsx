import React from "react"

import { RandomUserName } from '../RandomChoices'

const QuestionSelectMenuGender = (props) => {
  const { userName, gender, onGenderChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question2"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
      <label htmlFor="gender"><h1>{userName ? userName : RandomUserName()}, what would you like the main character to have as a gender?</h1></label>
        <select onChange={onGenderChange} id="gender" value={gender}>
          <option value="" disabled>--Please select an option--</option>
          <option value="feminine">feminine</option>
          <option value="masculine">masculine</option>
          <option value="non-binary">non-binary</option>
        </select>
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionSelectMenuGender
