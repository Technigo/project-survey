import React from "react";

export const QuestionOne = ({ name, onNameInputChange }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h3>Let's start with the basics!</h3>
      <label htmlFor="name">What is your name?</label>
      <input
        type="text"
        value={name}
        onChange={onNameInputChange}
        required
        placeholder="Type your full name"
      />
    </form>
  )
}

