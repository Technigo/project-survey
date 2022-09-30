/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

const UserLastname = ({ userlastname, setUserlastname, username }) => {
  const handleUserLastnameInputChange = (event) => {
    setUserlastname(event.target.value);
  };
  return (
    <div>
      <p className="user-p" tabIndex="0">Nice to meet you {username} and your surname?</p>
      <input value={userlastname} className="user-input" type="text" placeholder="surname" required="required" onChange={handleUserLastnameInputChange} />
    </div>
  )
}

export default UserLastname;