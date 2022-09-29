import React from 'react';

const NameInput = ({ userName, setUserName }) => {
  return (
    <div>
      <label htmlFor="name-input">Name
        <input id="name-input" type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
      </label>
    </div>
  );
}

export default NameInput;