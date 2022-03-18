import React, { useState } from 'react'

const Input = ({ favouriteMovie, onInputChangeAgain }) => {
    return (
      <div>
        <label htmlFor="favouriteMovie">Which movie is your favourite of all time? </label>
        <input
          id="favouriteMovie"
          type="text" 
          value={favouriteMovie}
          onChange={onInputChangeAgain}
        />
      </div>
    );
};

export default Input;