import React from 'react';

const NameInput = ({ userName, setUserName }) => {
  return (
    <div className="question-wrapper">
      <fieldset>
        <legend>What is your name?</legend>
        <label htmlFor="name-input">
          <input
            className="input-field"
            id="name-input"
            type="text"
            value={userName}
            placeholder="Input name"
            required
            onChange={(event) => setUserName(event.target.value)} />
        </label>
      </fieldset>
    </div>
  );
}

export default NameInput;