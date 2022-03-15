import React from "react"

const QuestionTextUserName = (props) => {
  const { userName, onUserNameChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question1"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
        <h1>What’s your first name?</h1>
        <input type="text" onChange={onUserNameChange} value={userName}/>
        <button type='submit'>Next question</button>
      </form>
    </>
  )
}

export default QuestionTextUserName
