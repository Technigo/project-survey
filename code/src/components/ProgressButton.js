import React from 'react';

export const ProgressButton = ({ progress, setProgress }) => {
  const handleProgressIncrement = () => {
    setProgress(progress + 1);
  }
  return <button type="button" onClick={handleProgressIncrement}>Proceed</button>
}
