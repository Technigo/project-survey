import React from "react"

const QuestionTextUserName = (props) => {
  const { userName, onUserNameChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="userName">
        <h1>Type your first name</h1>
      </label>
      <input
        className="input-text"
        id="userName"
        type="text"
        onChange={onUserNameChange}
        value={userName}
      />
    </div>
  )
}

export default QuestionTextUserName
