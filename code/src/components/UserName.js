import React from 'react';

const UserName = ({ userName, setUserName }) => {
  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value)
  }
  return (
    <div className="input-field">
      <h2 className="question-title"> Hello, please type in your name</h2>
      <input
        className="input-box"
        placeholder="Type here"
        value={userName}
        type="text"
        onChange={handleUserNameInputChange}
      />
    </div>
  )
}

export default UserName