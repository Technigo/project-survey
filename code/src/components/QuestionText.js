import React from 'react'

export const Question = (props) => {

  return (
    <div className="question">
      <label>
        <h2>{props.title}</h2>
        <input
          type="text"
          placeholder="Type your name here..."
          required
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </label>
    </div>
  )
}