/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const UserName = ({ username, setUsername }) => {
  const handleUserNameInputChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div>
      <p className="user-p" tabIndex="0"> Let's start with your first name.</p>
      <input type="text" className="user-input" tabIndex="0" value={username} onChange={handleUserNameInputChange} placeholder="name" name="name" required="required" />
    </div>
  )
}

export default UserName;