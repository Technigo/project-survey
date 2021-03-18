import React from 'react'

const SubmitButton = (props) => {
    return (
        <button 
            onClick={props.onSubmit}
        >
            SUBMIT
        </button>
    )
}

export default SubmitButton;