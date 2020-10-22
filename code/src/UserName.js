import React from 'react';

const UserName = ({ userName, onNameChange }) => {
  return (
    <div className="section-user-name" id="sectionUserName">
      <label className="name-label" htmlFor="userName">Your full name</label>
      <input className="name-input"
        id="userName" 
        type="text"
        onChange={event => onNameChange(event.target.value)}
        value={userName}
      />
    </div>
  );
};

export default UserName
