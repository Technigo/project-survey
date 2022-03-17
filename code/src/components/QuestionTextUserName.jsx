import React from "react"

const QuestionTextUserName = (props) => {
  const { userName, onUserNameChange } = props

  return (
    <>
        <h1>What’s your first name?</h1>
        <input type="text" onChange={onUserNameChange} value={userName} />
    </>
  )
}

export default QuestionTextUserName
