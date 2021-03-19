import React from 'react';

const Question1 = ( {name, onNameChange}) => {

    return (
    <>
    <div className="form-container">
    <p>Start by entering your name  
        <span role="img" aria-label="Smile Face Emoji">👇</span>  
    </p>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type='text'
                    onChange={(e) => onNameChange(e)}
                    required
                    value={name}
                    maxLength="20"
                    minLength="1"
                />
            </div>
        </div>
    </>
    )
}

export default Question1;

