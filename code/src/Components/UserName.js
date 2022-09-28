import React from 'react';

const UserName= ({userName, setUserName}) => {
    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
      }
      return (
        <>
        <p> Whats your name?</p>
        <input 
        value={userName} 
        type="text" 
        onChange={handleUserNameChange} 
        />
        </>
      )
}

export default UserName;