import React from 'react'

export const ScrollWin = () => {
  const handleClick = () => {
    window.scrollTo(0, 500)
  }
  return (
    <div>
      <button className="startBtn" type="button" onClick={handleClick}>Give Feedback</button>
    </div>
  )
}