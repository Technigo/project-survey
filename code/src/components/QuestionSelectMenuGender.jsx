import React from "react"

import { RandomUserName } from '../RandomChoices'

const genderItems = ["feminine", "masculine", "non-binary"]

const QuestionSelectMenuGender = (props) => {
  const { userName, gender, onGenderChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="gender"><h1>{userName ? userName : RandomUserName()}, select the gender of the main character</h1></label>
        <select className="select-input" onChange={onGenderChange} id="gender" value={gender}>
          <option value="" disabled>--Please select an option--</option>
          {genderItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </div>
  )
}

export default QuestionSelectMenuGender
