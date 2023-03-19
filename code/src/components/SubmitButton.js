import React from 'react';
import './buttons.css'

export const SubmitButton = ({ page, setPage }) => {
  const handlePageIncrease = () => {
    setPage(page + 1)
  }
  return <button type="submit" onClick={handlePageIncrease}>Submit</button>
}

