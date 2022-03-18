import React from "react"

const QuestionTextNotFriendName = (props) => {
  const { notFriendName, onNotFriendNameChange } = props

  return (
    <div className="q-and-a-box">
        <h1>Type the first name of someone that you would love to have at your service</h1>
        <input className="input-text" type="text" onChange={onNotFriendNameChange} value={notFriendName} />
    </div>
  )
}

export default QuestionTextNotFriendName
