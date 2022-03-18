import React from "react"

import { RandomBeverage } from "../RandomChoices"

const QuestionTextFriendName = (props) => {
  const { beverage, friendName, onFriendNameChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="friendName">
        <h1>
          Type the first name of someone to drink your{" "}
          {beverage ? beverage : RandomBeverage()} with
        </h1>
      </label>
      <input
        className="input-text"
        id="friendName"
        type="text"
        onChange={onFriendNameChange}
        value={friendName}
      />
    </div>
  )
}

export default QuestionTextFriendName
