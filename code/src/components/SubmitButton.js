import React from 'react';

export const SubmitButton = (button, setButton) => {
  const handleSubmitButton = () => {
    setButton(alert('Thank you'))
  }

  return (
    <div className="submitBtn">
      <button type="button" onSubmit={handleSubmitButton}>Submit</button>
    </div>

  )
}
