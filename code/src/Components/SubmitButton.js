import React from 'react'

const SubmitButton = (props) => {
  return (
    <div className="submit-button-wrapper">
      <button
        type="submit"
        onClick={props.onSubmit}
      >
        SUBMIT
      </button>
    </div>
  )
}

export default SubmitButton;