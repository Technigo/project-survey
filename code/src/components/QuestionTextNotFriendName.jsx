import React from "react"

import { RandomSnack } from '../RandomChoices'

const QuestionTextNotFriendName = (props) => {
  const { snack, notFriendName, onNotFriendNameChange } = props

  return (
    <>
        <h1>Who would be as delightful to have at your service than eating this {snack ? snack : RandomSnack()}? Don’t be shy, maybe your annoying neighbour or your brother-in-law?</h1>
        <input type="text" onChange={onNotFriendNameChange} value={notFriendName} />
    </>
  )
}

export default QuestionTextNotFriendName
