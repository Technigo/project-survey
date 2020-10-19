import React from 'react';

//props title className and function???
const SubmitButton = ({name, place, partner, handleSubmit}) => {
    return (
        <button
            type="submit"
            onClick={handleSubmit}
            disabled={name === '' || place === '' || partner === ''} >
            Submit
        </button>
    )
}

export default SubmitButton;