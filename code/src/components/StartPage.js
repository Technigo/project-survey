import React, { useState } from 'react';

const noButton = () => {
  alert('No? Try again!');
};

const StartPage = ({ onStepChange }) => {
  const [hidden, setHidden] = useState(false);
  return (
    /* if user select maybelater-button -> display alert and message, StartPage will be hidden */
    <>
      {hidden ? (
        (alert('OK, hope to see you soon!'),
        (<span className='message'>Bye bye!</span>))
      ) : (
        <>
          <h1>Ready for Quiz time?</h1>
          <div className='start-buttons'>
            <button type='button' onClick={onStepChange}>
              Yes
            </button>
            <button type='button' onClick={noButton}>
              No
            </button>
            <button
              type='button'
              onClick={() => setHidden(true)}
              value={hidden}
            >
              Maybe later
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default StartPage;
