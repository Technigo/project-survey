import React from 'react';

const UserName = ({ name, setName }) => {
  const handleUserNameInputChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <p>Hello, please type in your name:</p>
      <input value={name} type="text" placeholder="Name" onChange={handleUserNameInputChange} />
    </>
  );
}

export default UserName