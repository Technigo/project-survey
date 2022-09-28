import React from 'react';

const UserMail = ({ mail, setMail }) => {
  const handleMailInputChange = (event) => {
    setMail(event.target.value);
  };
  return (
    <div>
      <p>What is your email address?</p>
      <input value={mail} type="text" onChange={handleMailInputChange} />
    </div>
  )
}

export default UserMail