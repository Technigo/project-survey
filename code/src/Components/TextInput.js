import React from 'react';


export const TextInput = ({name, setName}) => {

    return (
        <div>
            <h2 tabIndex='0'>What's your name?</h2>
            <label tabIndex ='0'>
                <input autoFocus
                    type='text' 
                    id='name'
                    aria-label='Whats your name?'
                    onChange={event => setName(event.target.value)}
                    value={name}
                    required minLength='2'
                />

            </label>
        </div>
    )};


