import React from 'react';

const noGameStart = () => {
  alert('Oh ok, maybe next time then!🙁');
};

const IntroPage = ({ onStepChange }) => {
  return (
    <div className="welcome-message-container" tabIndex="0" id="first-question">
      <h1 className="welcome-message">
        Want to watch a horror movie?....................{' '}
      </h1>
      <div className="intro-button-wrapper">
        <button className="button" type="button" onClick={onStepChange}>
          YES
        </button>

        <button className="button" type="button" onClick={noGameStart}>
          NO
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
