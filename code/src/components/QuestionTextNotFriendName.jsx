import React from "react"

import { RandomSnack } from '../RandomChoices'

const QuestionTextNotFriendName = (props) => {
  const { snack, notFriendName, onNotFriendNameChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question7"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
        <h1>Who would be as delightful to have at your service than eating this {snack ? snack : RandomSnack()}? Don’t be shy, maybe your annoying neighbour or your brother-in-law?</h1>
        <input type="text" onChange={onNotFriendNameChange} value={notFriendName} />
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionTextNotFriendName
