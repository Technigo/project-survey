import React from 'react';

export const Start = (begin) => {
  const handleClick = () => {
    begin.onButtonClick();
  }
  return (
    <div className="content-container">
      <div>
        <h3>Hello!</h3>
      </div>
      <div>
        <p className="start-p">Have you been feeling a little bit stressed lately? <br />
        I would like to help you feel a little bit better,
        let&apos;s take our first steps together...
        </p>
      </div>
      <button className="startBtn" type="button" onClick={handleClick}>Start</button>
    </div>
  )
}
