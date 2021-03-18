import React from 'react';

const Welcome = ({handleSubmit}) => {
    return (
        <>
        <h1 className='main-heading'>Tell us know what you think... </h1>
        <p className='survey-intro'>
          Thank you for filling out our survey. 
        </p>
        <button onSubmit={handleSubmit}
            className='button'
            type='submit'
            > Start!
        </button> 
        </>
    );
};

export default Welcome;