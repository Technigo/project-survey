import React from "react"

const BackButton = (props) => {
  const { likeSports, step, onStepChange } = props

  if ((step === 1) | (step === 2)) {
    return null
  } else if (step === 13) {
    return (
      <div className="back-button-box">
        <button
          type="button"
          onClick={() => onStepChange(likeSports ? -1 : -2)}
        >
          Back
        </button>
      </div>
    )
  } else {
    return (
      <div className="back-button-box">
        <button type="button" onClick={() => onStepChange(-1)}>
          Back
        </button>
      </div>
    )
  }
}

export default BackButton
