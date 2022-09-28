/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const UserName = ({ username, setUsername }) => {
  const handleUserNameInputChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div>
      <p>Let's start with your first name.
      </p>
      <input value={username} type="text" onChange={handleUserNameInputChange} placeholder="name" name="name" required="required" />
    </div>
  )
}

export default UserName