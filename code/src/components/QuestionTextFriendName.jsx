import React from "react"

import { RandomBeverage } from '../RandomChoices'

const QuestionTextFriendName = (props) => {
  const { beverage, friendName, onFriendNameChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question9"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
        <h1>Who would you rather drink your {beverage ? beverage : RandomBeverage()} with? Maybe a friend or a nice colleague?</h1>
        <input type="text" onChange={onFriendNameChange} value={friendName} />
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionTextFriendName
