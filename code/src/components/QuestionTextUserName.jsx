import React from "react"

const QuestionTextUserName = (props) => {
  const { username, onUserNameChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question1"></div>
      </div>
      <form>
        <h1>What’s your name?</h1>
        <input type="text" onChange={onUserNameChange} value={username} />
        <button onClick={() => onStepChange(1)}>Next question</button>
      </form>
    </>
  )
}

export default QuestionTextUserName
