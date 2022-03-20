import React from 'react';

const NextButton = ({ displayPage, onClick }) => {

    // NextButton's type is button if it's not the last 
    // question, otherwise the type is submit

    const ifNotTheLastQuestion = (
        <button
            className='button'
            type="button"
            onClick={onClick}
        >
            Next
        </button>
    );

    const ifTheLastQuestion = (
        <button
            className='button'
            type="submit"
            onClick={onClick}
        >
            Submit
        </button>
    );

    if (displayPage === 3) {
        return ifTheLastQuestion;
    } else {
        return ifNotTheLastQuestion;
    };
};

export default NextButton;

