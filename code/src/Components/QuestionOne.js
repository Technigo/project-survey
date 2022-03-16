import React from "react";

export const QuestionOne = ({ name, onNameInputChange }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label htmlFor="name">Your name</label>
      <input
        type="text"
        value={name}
        onChange={onNameInputChange}
        required
        placeholder="Type your name"
      />
    </form>
  )
}

