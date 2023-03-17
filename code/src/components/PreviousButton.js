import React from 'react';
import './buttons.css'

export const PreviousButton = ({ page, setPage }) => {
  const handlePageDecrease = () => {
    setPage(page - 1)
  }
  return <button type="button" onClick={handlePageDecrease}>Previous</button>
}

