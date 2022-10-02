import React from 'react';

export const UserNameInput = ({ userName, setUserName }) => {
  const handleUserNameInput = (event) => {
    setUserName(event.target.value);
  }
  return (
    <p>
      Sincerely,
      <input className="text-input" type="text" value={userName} onChange={handleUserNameInput} placeHolder="your name" required />
    </p>
  );
}