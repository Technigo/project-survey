import React from 'react'

export const Input = ({ name, setName}) => {
    return (
        <label>
            <h1> Hi Sweetie, are you ready to choose your favorite dessert? </h1>
            <h2> First of all, I need to know, is your name sweet enough to start this survey?</h2>
            <input className='text-input'
                type='text'
                onChange={event => setName(event.target.value)}
                value={name}
            />
        </label>
    )
}