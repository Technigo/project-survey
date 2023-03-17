import React from 'react';

export const Start = (begin) => {
  const handleClick = () => {
    begin.onButtonClick();
  }
  return (
    <div className="start-container">
      <div className="start-head">
        <h3>Hi!</h3>
      </div>
      <div className="start-info">
        <p className="start-p">Do you feel stressed lately?</p>
        <p className="start-p">Would you like to explore some methods to feel better?</p>
        <p className="start-p">Let&apos;s take our first steps togheter...</p>
      </div>
      <button className="startBtn" type="button" onClick={handleClick}>Start</button>
    </div>
  )
}
