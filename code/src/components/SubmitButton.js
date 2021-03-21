import React from "react"

const SubmitButton = (props) => {
  const { setSummary, isRequired } = props
  const handleSubmit = () => {
    setSummary(isRequired())
  }

  if (isRequired()) {
    return (
      <button 
      className="submit-button"
      onClick={handleSubmit}
      >
        Create card
      </button>
    )
  } else {
    return (
      <button
      className="submit-button"
      onClick={handleSubmit} disabled
      >
        Create card
      </button>
    )
  }
}

export default SubmitButton