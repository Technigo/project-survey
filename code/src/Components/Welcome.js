import React from 'react';


const Welcome = ({ username, onInputChangeName, onClickNext }) => {
    return (
      <section className="welcome section">
        <div className="section-child">
          <h2 className="title">Welcome to our cinema!</h2>
          <label htmlFor="name">Don't be stranger, let us know your name: </label>
          <input
            id="name"
            type="text" 
            value={username}
            onChange={onInputChangeName}
          />
          <button className="button" onClick={onClickNext}>
            {' '}
            Let's Go {' '}
          </button>
        </div>
      </section>
    );
};

export default Welcome;
