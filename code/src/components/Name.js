import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <div className="header">
        <h1>Are you a day dreamer?</h1>
        <h1>Let&apos;s throw a <span>party</span> !</h1>
      </div>
      <div className="question">
        <p><span>What&apos;s your name?</span></p>
      </div>
      <div className="answer-input">
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
    </>
  )
}