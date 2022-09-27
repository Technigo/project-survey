import React from 'react';

const UserName = ({ userName, setUserName }) => {
  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value)
  }
  return (
    <div>
      <h2> Hello, please type in your name</h2>
      <input
        value={userName}
        type="text"
        onChange={handleUserNameInputChange}
      />
    </div>
  )
}

export default UserName