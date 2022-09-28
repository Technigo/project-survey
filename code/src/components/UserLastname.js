import React from 'react';

const UserLastname = ({ userlastname, setUserlastname }) => {
  const handleUserLastnameInputChange = (event) => {
    setUserlastname(event.target.value);
  };
  return (
    <div>
      <p>Nice to meet you and your surname?</p>
      <input value={userlastname} type="text" onChange={handleUserLastnameInputChange} />
    </div>
  )
}

export default UserLastname