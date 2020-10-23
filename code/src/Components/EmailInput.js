import React from 'react';

export const EmailInput = ({ email, setEmail }) => {
  
  return (
    <label className="email-label">
      2. What's your e-mail address?
      <input 
        className="email-input"
        type="email"
        onChange={event => setEmail(event.target.value)}
        value={email}
        placeholder="Type your e-mail address here..."
        required
      />
    </label>
  );
};