import React from 'react';

const UserName= ({userName, setUserName}) => {
    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
      }
      return (
        <>
        <div className="questionWrapper">
        <p> Whats your name?</p>
        <div className="inputWrapper">
        <input 
        value={userName} 
        type="text" 
        onChange={handleUserNameChange}
        />
        </div>
        </div>
        </>
      )
}

export default UserName;