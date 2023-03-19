import React from 'react';
import './buttons.css';

export const NextButton = ({ page, setPage }) => {
  const handlePageIncrease = () => {
    setPage(page + 1)
  }
  const handleEnterKey = (event) => {
    if (event.keyCode === 'Enter') {
      handlePageIncrease()
    }
  }

  return <button type="button" onClick={handlePageIncrease} onKeyDown={handleEnterKey}>Next</button>
}

