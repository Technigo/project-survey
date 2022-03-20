import React from 'react';

const Input = ({ favouriteMovie, onInputChangeMovie, onClickNext }) => {
    return (
      <section className="input section">
        <div className="section-child">
          <label htmlFor="favouriteMovie">Which movie is your favourite of all time? </label>
          <input
            id="favouriteMovie"
            type="text" 
            value={favouriteMovie}
            onChange={onInputChangeMovie}
          />
          <button className="button" onClick={onClickNext}>Next</button>
        </div>
      </section>
    );
};

export default Input;
