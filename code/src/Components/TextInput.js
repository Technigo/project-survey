import React from "react";

export const TextInput = ({ name, onNameInputChange }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h3>Let's start with the basics!</h3>
      <label 
        htmlFor="nameinput"
        aria-label="nameinput"
        >
        What is your name?</label>
      <input
        type="text"
        name="nameinput"
        value={name}
        onChange={onNameInputChange}
        placeholder="Type your full name"
      />
    </form>
  )
}

