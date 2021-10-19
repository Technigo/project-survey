import React from "react"

const Starter = ({ onStepChange }) => {
  return (
    <div className="starter">
      <h1 className="question"> Which Friends Character Are You?</h1>
      <button onClick={onStepChange}> Start Quiz </button>
    </div>
  )
}

export default Starter
