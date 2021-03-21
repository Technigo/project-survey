import React from 'react'

const SubmitButton = ({ isFormFilled }) => {
  return (
    <button
      disabled={isFormFilled()}
      type="submit"
      className="start-next-button"
    >
      Submit
    </button>
  )
}

export default SubmitButton