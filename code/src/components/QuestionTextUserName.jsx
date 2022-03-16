// import React, { useState } from "react"
import React from "react"

const QuestionTextUserName = (props) => {
  const { userName, onUserNameChange } = props

  // const [error, setError] = useState("")

  // const onButtonClicked = (event) => {
  //   event.preventDefault()
  //   if (userName.length) {
  //     onStepChange(1)
  //   } else {
  //     setError("required input")
  //   }
  // }

  return (
    <>
        <h1>What’s your first name?</h1>
        <input type="text" onChange={onUserNameChange} value={userName} />
        {/* {!!error.length && <div>{error}</div>}
        <button onClick={onButtonClicked}>Next</button> */}
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
    </>
  )
}

export default QuestionTextUserName
