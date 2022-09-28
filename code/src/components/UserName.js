/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const UserName = ({ name, setName }) => {
  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>Let's start with your first name.
      </p>
      <input value={name} type="text" onChange={handleNameInputChange} placeholder="name" name="name" required="required" />
    </div>
  )
}

export default UserName