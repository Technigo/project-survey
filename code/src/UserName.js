import React from 'react';

const UserName = ({ userName, onNameChange }) => {
  return (
    <section className="name-input" id="sectionUserName">
      <label className="name-label" htmlFor="userName">Your full name</label>
      <input 
        id="userName" 
        type="text"
        onChange={event => onNameChange(event.target.value)}
        value={userName}
      />
    </section>
  );
};

export default UserName
