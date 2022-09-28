import React from 'react';

const UserLastname = ({ lastname, setLastname }) => {
  const handleLastnameInputChange = (event) => {
    setLastname(event.target.value);
  };
  return (
    <div>
      <p>Nice to meet you and your surname?</p>
      <input value={lastname} type="text" onChange={handleLastnameInputChange} />
    </div>
  )
}

export default UserLastname