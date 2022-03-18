import React from 'react'

const Welcome = ({ username, onInputChange }) => {
    return (
      <div className="welcome section">
        <h2 className="title">Welcome to our cinema!</h2>
        <label htmlFor="name">Don't be stranger, let us know your name: </label>
        <input
          id="name"
          type="text" 
          value={username}
          onChange={onInputChange}
        />
      </div>
    );
};

export default Welcome;