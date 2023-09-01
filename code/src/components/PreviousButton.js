import React from 'react';

const PreviousButton = ({ setSection, whatQuestionPrevious }) => {
  const handlePreviousButton = () => {
    setSection(whatQuestionPrevious)
  }
  return (
    <button
      type="button"
      className="button"
      onClick={handlePreviousButton}>Go back
    </button>
  )
}

export default PreviousButton;