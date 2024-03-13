import React from 'react';

const ProgressButton = ({ progress, setProgress }) => {
  const handleProgressIncrement = () => {
    setProgress(progress + 1);
  }

  return (
    <button
      type="button"
      onClick={handleProgressIncrement}
      className="progressBtn">
    Proceed
    </button>
  )
}

export default ProgressButton;