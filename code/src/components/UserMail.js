import React from 'react';

const UserMail = ({ usermail, setUsermail }) => {
  const handleMailInputChange = (event) => {
    setUsermail(event.target.value);
  };
  return (
    <div>
      <p>What is your email address?</p>
      <input value={usermail} type="email" placeholder="email address" required="required" onChange={handleMailInputChange} />
    </div>
  )
}

export default UserMail;