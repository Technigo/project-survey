import React from "react"

const QuestionTextUserName = (props) => {
  const { userName, onUserNameChange } = props

  return (
    <div className="q-and-a-box">
        <h1>Type your first name</h1>
        <input className="input-text" type="text" onChange={onUserNameChange} value={userName} />
    </div>
  )
}

export default QuestionTextUserName
