import React from "react"

import { RandomBeverage } from '../RandomChoices'

const QuestionTextFriendName = (props) => {
  const { beverage, friendName, onFriendNameChange } = props

  return (
    <div className="q-and-a-box">
        <h1>Type the first name of someone to drink your {beverage ? beverage : RandomBeverage()} with</h1>
        <input className="input-text" type="text" onChange={onFriendNameChange} value={friendName} />
    </div>
  )
}

export default QuestionTextFriendName
