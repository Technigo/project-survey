import React from 'react'

export const Button = ({ name, section, food, radioInput }) => {
    return (
        <button type='submit' disabled=
            {name === '' ||
                (name !== '' && section === 1 && radioInput === '') ||
                (name !== '' && section === 2 && food === undefined)}
        >Next</button>
    )
} 