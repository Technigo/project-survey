import React from "react"

import { RandomUserName } from '../RandomChoices'

const genderItems = ["feminine", "masculine", "non-binary"]

const QuestionSelectMenuGender = (props) => {
  const { userName, gender, onGenderChange } = props

  return (
    <>
      <label htmlFor="gender"><h1>{userName ? userName : RandomUserName()}, what would you like the main character to have as a gender?</h1></label>
        <select onChange={onGenderChange} id="gender" value={gender}>
          <option value="" disabled>--Please select an option--</option>
          {genderItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </>
  )
}

export default QuestionSelectMenuGender
