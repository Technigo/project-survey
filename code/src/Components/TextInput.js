import React from "react";

export const TextInput = ({ name, onNameInputChange, Counter }) => {

  return (
    <form>
      <h3>Let's start with the basics!</h3>
      <label 
        htmlFor="nameInput"
        aria-label="nameInput"
        >
        What is your name? </label>
      <input
        type="text"
        name="nameinput"
        value={name}
        onChange={onNameInputChange}
        placeholder="Type your full name"
      />
      <button 
        type="button"
        onClick={Counter}
        >NEXT</button>
    </form>
  )
}

