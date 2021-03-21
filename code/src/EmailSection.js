import React from 'react';

export const EmailSection = ({ email, onEmailChange }) => {

  return (
    <div className="email-section">
      <label tabIndex="0">
        <h2>Type your e-mail</h2>
        <input
          className="email"
          tabIndex="0"
          type='email'
          onChange={(e) => onEmailChange(e)}
          required
          email={email}
          placeholder="E-mail"
        />
      </label>
    </div>
  );
};

