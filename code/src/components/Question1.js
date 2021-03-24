import React from 'react';

const Question1 = ( {name, onNameChange}) => {

    return (
    <>
    <p>Start by entering your name  
        <span role="img" aria-label="Smile Face Emoji">👇</span>  
    </p>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    id='name'
                    type='text'
                    onChange={(e) => onNameChange(e)}
                    required
                    value={name}
                    maxLength="20"
                    minLength="1"
                />
            </div>
    </>
    )
}

export default Question1;

