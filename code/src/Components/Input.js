import React, { useState } from 'react'

const Input = ({ favouriteMovie, onInputChangeAgain, onClickNext }) => {
    return (
      <section className="input section">
        <label htmlFor="favouriteMovie">Which movie is your favourite of all time? </label>
        <input
          id="favouriteMovie"
          type="text" 
          value={favouriteMovie}
          onChange={onInputChangeAgain}
        />
        <button className="button" onClick={onClickNext}>Next</button>
      </section>
    );
};

export default Input;