import React, { useState } from 'react'

export const QuestionText = (props) => {

  const [props.text, props.setText] = useState("")

  return (

    <label>
      <h2># Please enter your name to participate *</h2>
      <input
        type="text"
        required
        placeholder="Type your name here..."
        onChange={(event) => setText(event.target.value)}
        value={props.text}
        onKeyPress={(event) => { event.key === "Enter" && event.preventDefault() }}
      />
    </label>
  )
}