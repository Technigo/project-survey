import React from 'react'

export const ScrollWin = () => {
  const handleClick = () => {
    window.scrollTo(0, 1100)
  }
  return (
    <div className="scroll">
      <button type="button" onClick={handleClick}>Give Feedback</button>
    </div>
  )
}