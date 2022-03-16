import React from "react"

import { RandomSnack } from '../RandomChoices'

const QuestionTextNotFriendName = (props) => {
  const { snack, notFriendName, onNotFriendNameChange, onStepChange } = props

  return (
    <>
        <h1>Who would be as delightful to have at your service than eating this {snack ? snack : RandomSnack()}? Don’t be shy, maybe your annoying neighbour or your brother-in-law?</h1>
        <input type="text" onChange={onNotFriendNameChange} value={notFriendName} />
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionTextNotFriendName
