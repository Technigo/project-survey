import React from "react";

export const EmailInput = ({ email, onEmailInputChange, Counter }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h3>Type your email so we can contact you</h3>
      <label 
        htmlFor="email"
        aria-label="email"
        >What is your email?</label>
      <input
        type="email"
        value={email}
        onChange={onEmailInputChange}
        required
        placeholder="Type your email"
      />
        <button 
        type="button"
        onClick={Counter}
        >NEXT</button>
    </form>
  )
}

