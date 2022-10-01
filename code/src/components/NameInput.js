import React from 'react';

const NameInput = ({ userName, setUserName }) => {
  return (
    <div className="question-wrapper">
      <fieldset>
        <label htmlFor="name-input"> What is your name?
          <br />
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