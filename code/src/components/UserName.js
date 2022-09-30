import React from 'react';

const UserName = ({ userName, setUserName }) => {
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  }
  return (
    <label htmlFor="userName"><p>What is your name?</p>
      <input id="userName" type="text" value={userName} onChange={handleNameChange} />
    </label>
  );
}
export default userName;