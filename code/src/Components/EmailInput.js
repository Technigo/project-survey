import React from "react";

export const EmailInput = ({ email, onEmailInputChange }) => {

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
    </form>
  )
}

