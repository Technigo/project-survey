import React, { useState } from "react";

export const QuestionOne = () => {
  const [name, SetName] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>Your name</label>
      <input
        type="text"
        onChange={event => SetName(event.target.value)}
        value={name}
        required
        placeholder="Type your name"
      />
    </form>
  )
}