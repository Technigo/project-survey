import React from "react"

const QuestionSelectMenu = (props) => {
  const { location, onLocationChange, onStepChange, onFinalQuestion } = props

  return (
    <form>
      <select
        onChange={onLocationChange}
        value={location}
      >
        <option value="">Select location:</option>
        <option value="barcelona">Barcelona</option>
        <option value="oslo">Oslo</option>
        <option value="stockholm">Stockholm</option>
      </select>
      <button onClick={() => onStepChange(-1)}>Go back</button>
      <button onClick={onFinalQuestion}>See summary</button>
    </form>
  )
}

export default QuestionSelectMenu
