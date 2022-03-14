import React from "react"

const QuestionSelectMenuSnack = (props) => {
  const { userName, snack, onSnackChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question6"></div>
      </div>
      <form>
      <label htmlFor="snack"><h1>I offer you a snack, {userName}. What do you choose between these options?</h1></label>
        <select onChange={onSnackChange} id="gender" value={snack}>
          <option value="" disabled>--Please select an option--</option>
          <option value="chocolate bar">chocolate bar</option>
          <option value="candies">candies</option>
          <option value="nuts">nuts</option>
        </select>
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionSelectMenuSnack
