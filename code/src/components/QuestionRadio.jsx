import React from "react"

const ageGroups = ["0-18", "19-30", "30+"]

const QuestionRadio = (props) => {
  const { ageGroup, onGroupChange, onStepChange } = props

  return (
    <form>
      Age group:
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={onGroupChange}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
      <button onClick={() => onStepChange(-1)}>Go back</button>
      <button onClick={() => onStepChange(1)}>Next question</button>
    </form>
  )
}

export default QuestionRadio
