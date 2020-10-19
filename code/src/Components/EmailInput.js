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
        pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
        placeholder="Type your e-mail address here..."
        required
        formatErrorTxt
      />
    </label>
  );
};