import React from 'react';

export const UserNameInput = ({ userName, setUserName }) => {
  const handleUserNameInput = (event) => {
    setUserName(event.target.value);
  }
  return (
    <p>
      Sincerely,
      <input type="text" value={userName} onChange={handleUserNameInput} placeHolder="Your name" required />
    </p>
  );
}