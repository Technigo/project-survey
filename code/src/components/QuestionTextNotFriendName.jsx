import React from "react"

const QuestionTextNotFriendName = (props) => {
  const { snack, notFriendName, onNotFriendNameChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question7"></div>
      </div>
      <form>
        <h1>Who would be as delightful to have at your service than eating this {snack}? Don’t be shy, maybe it’s your annoying neighbour or your awful brother-in-law.</h1>
        <input type="text" onChange={onNotFriendNameChange} value={notFriendName} />
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionTextNotFriendName
