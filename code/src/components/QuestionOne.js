import React from 'react'
import { useState } from 'react'

export const QuestionOne = () => {
  const [name, setName] = useState("")
  return (
    <div className="question">
      <label>
        <h2>Question One...</h2>
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