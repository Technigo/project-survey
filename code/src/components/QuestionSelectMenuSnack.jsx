import React from "react"

const snackItems = ["candies", "chocolates pieces", "nuts"]

const QuestionSelectMenuSnack = (props) => {
  const { userName, snack, onSnackChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="snack">
        <h1>Select a snack between these options, {userName}</h1>
      </label>
      <select
        className="select-input"
        onChange={onSnackChange}
        id="snack"
        value={snack}
      >
        <option value="" disabled>
          --Select an option--
        </option>
        {snackItems.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default QuestionSelectMenuSnack
