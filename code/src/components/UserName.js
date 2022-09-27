import React from 'react';

const UserName = ({ name, setName }) => {
  const handleUserNameInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>Hello, please type in your name</p>
      <input value={name} type="text" onChange={handleUserNameInputChange} />
    </div>
  )
}

export default UserName