import React from 'react';


const Welcome = ({ username, onInputChangeName, onClickNext }) => {
    return (
      <section className="welcome section">
        <div className="section-child">
          <h2 className="title">Welcome to Broadway Independent Cinema!</h2>
          <div className="input-area">
          <label className="name">Don't be stranger, let us know your name: </label>
            <input
              id="name"
              type="text" 
              value={username}
              onChange={onInputChangeName}
            />
          </div>
            <button className="welcome-btn" onClick={onClickNext}>
              {' '}
              Let's Go {' '}
            </button>
        </div>
      </section>
    );
};

export default Welcome;
