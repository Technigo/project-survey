import React from 'react';

const UserEmail = ({email, onEmailChange}) => {
  return (
    <div className="section-user-email" id="sectionUserEmail">
      <label htmlFor="userEmail">Your Email (required)<sup aria-hidden="true">*</sup></label>
      <input 
        type="email" 
        id="userEmail"
        className="email-input"
        onChange={(event) => onEmailChange(event.target.value)}
        value={email}
        required
      />
    </div>
  )
};

export default UserEmail;
