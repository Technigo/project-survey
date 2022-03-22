import React from 'react';

const Input = ({ favouriteMovie, onInputChangeMovie, onClickNext }) => {
    return (
      <section className="input section">
        <div className="section-child">
          <div className="input">
            <form>
              <label htmlFor="favouriteMovie">What movie is your favourite of all time? </label>
              <input
                id="favouriteMovie"
                type="text" 
                value={favouriteMovie}
                onChange={onInputChangeMovie}
              />
            </form>
          </div>
          <button className="btn" onClick={onClickNext}>Next</button>
        </div>
      </section>
    );
};

export default Input;
