import React from 'react'

export const Name = ({name, setName, question}) => {

  return (
    <div className="name-wrapper">
      <label>
      {question}
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Type your name here..."
          required>
        </input>
      </label>
      <a href="#zodiac">
        <button 
          type="button" 
          className="next-button"
          disabled={name === ''}>
          NEXT
        </button>
      </a>
    </div>
  )
}