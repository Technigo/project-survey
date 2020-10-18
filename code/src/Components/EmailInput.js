import React from 'react';

export const EmailInput = ({ email, setEmail }) => {
  
  return (
    <label>
      What's your e-mail address?
      <input 
        type="email"
        onChange={event => setEmail(event.target.value)}
        value={email}
        required
      />
    </label>
  )
}