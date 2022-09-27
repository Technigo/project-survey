import React from 'react';

const UserName= ({name, setName}) => {
    const handleUserNameInputChange = (event) => {
        setName(event.target.value)
      }
      return (
        <input value={name} type="text" onChange={handleUserNameInputChange} />
      )
}

export default UserName;