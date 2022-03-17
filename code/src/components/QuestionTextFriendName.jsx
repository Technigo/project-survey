import React from "react"

import { RandomBeverage } from '../RandomChoices'

const QuestionTextFriendName = (props) => {
  const { beverage, friendName, onFriendNameChange } = props

  return (
    <>
        <h1>Who would you rather drink your {beverage ? beverage : RandomBeverage()} with? Maybe a friend or a nice colleague?</h1>
        <input type="text" onChange={onFriendNameChange} value={friendName} />
    </>
  )
}

export default QuestionTextFriendName
