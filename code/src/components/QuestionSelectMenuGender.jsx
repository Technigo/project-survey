import React from "react"

const QuestionSelectMenuGender = (props) => {
  const { userName, gender, onGenderChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question2"></div>
      </div>
      <form>
      <label htmlFor="gender"><h1>{userName}, what would you like the main character to have as a gender?</h1></label>
        <select onChange={onGenderChange} id="gender" value={gender}>
          <option value="" disabled>--Please select an option--</option>
          <option value="feminine">feminine</option>
          <option value="masculine">masculine</option>
          <option value="non-binary">non-binary</option>
        </select>
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionSelectMenuGender
