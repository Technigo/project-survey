import React from 'react';

export const SubmitButton = (button, setButton) => {
  const handleSubmitButton = () => {
    setButton()
  }

  return (

    <button className="nextButton" type="button" onClick={handleSubmitButton}>Submit</button>

  )
}
