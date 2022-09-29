import React from 'react';

const NameInput = ({ userName, setUserName }) => {
  return (
    <div className="question-wrapper">
      <label htmlFor="name-input">Who are you?
        <input
          className="input-field"
          id="name-input"
          type="text"
          value={userName}
          placeholder="Input name"
          required
          onChange={(event) => setUserName(event.target.value)} />
      </label>
    </div>
  );
}

export default NameInput;