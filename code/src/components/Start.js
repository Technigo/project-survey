import React from 'react';

export const Start = (begin) => {
  const handleClick = () => {
    begin.onButtonClick();
  }
  return (
    <div className="content-container">
      <div className="start-head">
        <h3>Hi!</h3>
      </div>
      <div className="start-info">
        <p className="start-p">Have you been feeling a little bit stressed lately? <br />
        I would like to help you feel better,
        let&apos;s take our first steps togheter...
        </p>
      </div>
      <button className="startBtn" type="button" onClick={handleClick}>Start</button>
    </div>
  )
}
