import React from 'react';

const Welcome = ({handleSubmit}) => {
    return (
        <div className="welcome-container">
        <h1 className='main-heading'>Tell us what you think... </h1>
        <p className='survey-intro'>
          Thank you for filling out our survey. 
        </p>
        <button onSubmit={handleSubmit}
            className='button'
            tabIndex='0'
            aria-pressed='false'
            aria-label='Start survey'
            type='submit'
            > Start!
        </button>
        </div> 
    );
};

export default Welcome;