import React from 'react';

const UserName= ({userName, setUserName}) => {
    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
      }
      return (
        <>
        <div className="questionWrapper">
        <p> Whats your name? </p>
        <div className="inputWrapper">
        <input
        id="userName" 
        type="text"
        name="userName"
        placeholder='Type your name here'
        value={userName} 
        onChange={handleUserNameChange}
        />
        </div>
        </div>
        </>
      )
}

export default UserName;