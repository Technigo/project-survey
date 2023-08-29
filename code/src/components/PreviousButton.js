import React from 'react';

const PreviousButton = ({ setSection, whatQuestionPrevious }) => {
  const handlePreviousButton = () => {
    setSection(whatQuestionPrevious)
  }
  return (
    <button
      type="button"
      className="previous-button"
      onClick={handlePreviousButton}>Go back
    </button>
  )
}

export default PreviousButton;