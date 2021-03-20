import React from 'react';


export const EmailSection = ({ email, onEmailChange }) => {

return (

  <div className="email-section">
    <label tabIndex="0">Type your e-mail</label>
      <input
        type='email'
        onChange={(e) => onEmailChange(e)}
        required
        email={email}
        placeholder="E-mail"
      />
    </div>

  );
};

