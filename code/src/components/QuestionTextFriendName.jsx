import React from "react"

const QuestionTextFriendName = (props) => {
  const { beverageType, friendName, onFriendNameChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question9"></div>
      </div>
      <form>
        <h1>Who would you rather drink your {beverageType} with? A friend or a nice colleague maybe?</h1>
        <input type="text" onChange={onFriendNameChange} value={friendName} />
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionTextFriendName
