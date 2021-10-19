import React from "react"

const ThirdQuestion = ({
  locationInput,
  onLocationInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  return (
    <form>
      <label className="question"> Where do you live?</label>
      <select onChange={onLocationInputChange} value={locationInput}>
        <option value=""> Select location </option>
        <option value="somewhere on Earth"> somewhere on Earth </option>
        <option value="Moon"> Moon </option>
        <option value="Platon"> Platon </option>
      </select>
      <div className="button-container">
        <button onClick={onPreviousQuestionChange}>Go Back</button>
        <button onClick={onNextQuestionChange}>Continue</button>
      </div>
    </form>
  )
}

export default ThirdQuestion
